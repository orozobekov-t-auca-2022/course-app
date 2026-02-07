import './App.css';
import Courses from './pages/Courses/Courses';
import Header from './shared/components/Header/Header';
import './App.css';
import {
  mockCurrentCoursesList,
  mockedCoursesList,
} from './mocks/mockCoursesList';
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

  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  const [courses, setCourses] = useState<CourseProps[]>(() => {
    const storedCourses = localStorage.getItem(STORAGE_KEY);
    return storedCourses ? JSON.parse(storedCourses) : mockCurrentCoursesList;
  });

  const [userLoggedIn, setUserLoggedIn] = useState<string | null>(() => {
    if (!localStorage.getItem('userLoggedIn')) {
      return null;
    }
    return localStorage.getItem('userLoggedIn');
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
    setCourses(mockedCoursesList);
  };

  const getCourse: (id: string) => Promise<CourseProps> = async (
    id: string
  ) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_KEY}courses/courses/${id}`
    );
    const data = await response.json();
    setSelectedCourseId(data.id);
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
                    setSelectedCourseId={setSelectedCourseId}
                    setCurrentPage={setCurrentPage}
                    onDeleteCourse={deleteCourse}
                    getCourse={getCourse}
                  />
                ) : (
                  <CourseInfo
                    selectedCourseId={selectedCourseId}
                    mockCurrentCoursesList={courses}
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
