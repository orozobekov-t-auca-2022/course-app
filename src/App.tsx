import './App.css';
import Courses from './pages/Courses/Courses';
import Header from './shared/components/Header/Header';
import './App.css';
import EmptyCoursesList from './pages/EmptyCoursesList/EmptyCoursesList';
import CourseFormModal from './shared/components/CourseFormModal/CourseFormModal';
import { useEffect, useState } from 'react';
import type { CourseProps, CurrentPageProps } from './types/types';
import CourseInfo from './pages/CourseInfo/CourseInfo';
import Login from './pages/Login/Login';

function App() {
  const [currentPage, setCurrentPage] = useState<CurrentPageProps>({
    currentPage: 'coursesList',
  });

  const [courses, setCourses] = useState<CourseProps[]>([]);

  const [userLoggedIn, setUserLoggedIn] = useState<string | null>(() => {
    if (!localStorage.getItem('accessToken')) {
      return null;
    }
    return localStorage.getItem('accessToken');
  });
  const [currentCourseInfo, setCurrentCourseInfo] = useState<CourseProps>({
    id: '',
    title: '',
    description: '',
    authors: [],
    duration: 0,
    creationDate: '',
  });
  const [openCourseForm, setOpenCourseForm] = useState(false);

  useEffect(() => {
    if (userLoggedIn) {
      loadCourses();
    }
  }, [userLoggedIn]);

  const loadCourses = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_KEY}courses/courses`
      );
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Error loading courses:', error);
    }
  };

  const deleteCourse = async (id: string) => {
    const courseToDelete = courses.find((course) => course.id === id);
    if (!courseToDelete) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_KEY}courses/courses/${id}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to delete course');
      }

      setCourses((prevCourses) =>
        prevCourses.filter((course) => course.id !== id)
      );
    } catch (error) {
      console.error('Error deleting course:', error);
      alert('Failed to delete course. Please try again.');
    }
  };

  const getCourse: (id: string) => Promise<CourseProps> = async (
    id: string
  ) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_KEY}courses/courses/${id}`
    );
    const data = await response.json();
    setCurrentPage({ currentPage: 'courseInfo' });
    setCurrentCourseInfo(data);
    return data;
  };

  return (
    <>
      <Header
        userLoggedIn={userLoggedIn}
        setUserLoggedIn={setUserLoggedIn}
        setCurrentPage={setCurrentPage}
      />
      <div className="content">
        {userLoggedIn ? (
          <>
            {courses.length === 0 ? (
              <EmptyCoursesList onAddCourse={() => setOpenCourseForm(true)} />
            ) : (
              <>
                {currentPage.currentPage === 'coursesList' ? (
                  <Courses
                    courses={courses}
                    setCurrentPage={setCurrentPage}
                    onDeleteCourse={deleteCourse}
                    getCourse={getCourse}
                    onAddCourse={() => setOpenCourseForm(true)}
                  />
                ) : (
                  <CourseInfo
                    setCurrentPage={setCurrentPage}
                    currentCourseInfo={currentCourseInfo}
                  />
                )}
              </>
            )}
            {openCourseForm && (
              <CourseFormModal
                setOpenCourseForm={setOpenCourseForm}
                onCourseCreated={(newCourse) => {
                  setCourses((prevCourses) => [...prevCourses, newCourse]);
                }}
              />
            )}
          </>
        ) : (
          <Login
            setUserLoggedIn={setUserLoggedIn}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </>
  );
}

export default App;
