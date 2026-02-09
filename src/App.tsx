import './App.css';
import Courses from './pages/Courses/Courses';
import Header from './shared/components/Header/Header';
import './App.css';
import EmptyCoursesList from './pages/EmptyCoursesList/EmptyCoursesList';
import { useEffect, useState } from 'react';
import type { CourseProps, CurrentPageProps } from './types/types';
import CourseInfo from './pages/CourseInfo/CourseInfo';
import Login from './pages/Login/Login';

const STORAGE_KEY = 'courses';

function App() {
  const [currentPage, setCurrentPage] = useState<CurrentPageProps>({
    currentPage: 'coursesList',
  });

  const [courses, setCourses] = useState<CourseProps[]>(() => {
    const storedCourses = localStorage.getItem(STORAGE_KEY);
    return storedCourses ? JSON.parse(storedCourses) : [];
  });

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

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
  }, [courses]);

  const deleteCourse = (id: string) => {
    setCourses((prevCourses) =>
      prevCourses.filter((course) => course.id !== id)
    );
  };

  const restoreCourse = () => {
    setCourses([]);
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
              <EmptyCoursesList onRestore={restoreCourse} />
            ) : (
              <>
                {currentPage.currentPage === 'coursesList' ? (
                  <Courses
                    courses={courses}
                    setCurrentPage={setCurrentPage}
                    onDeleteCourse={deleteCourse}
                    getCourse={getCourse}
                  />
                ) : (
                  <CourseInfo
                    setCurrentPage={setCurrentPage}
                    currentCourseInfo={currentCourseInfo}
                  />
                )}
              </>
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
