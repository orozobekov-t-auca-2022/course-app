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

  const [userLoggedIn, setUserLoggedIn] = useState<string | null>(null);

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

  return (
    <>
      <Header
        userLoggedIn={userLoggedIn}
        setUserLoggedIn={setUserLoggedIn}
        setCurrentPage={setCurrentPage}
      />
      <div className="content">
        {userLoggedIn || currentPage.currentPage === 'login' ? (
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
                  />
                ) : (
                  <CourseInfo
                    selectedCourseId={selectedCourseId}
                    mockCurrentCoursesList={courses}
                    setCurrentPage={setCurrentPage}
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
