import './App.css';
import CoursesList from './pages/CoursesList/CoursesList';
import Header from './shared/components/Header/Header';
import './App.css';
import { mockCurrentCoursesList } from './mocks/mockCoursesList';
import EmptyCoursesList from './pages/EmptyCoursesList/EmptyCoursesList';
import { useEffect, useState } from 'react';
import type { CourseProps, CurrentPageProps } from './types/types';
import CourseInfo from './pages/CourseInfo/CourseInfo';

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

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
  }, [courses]);

  const deleteCourse = (id: string) => {
    setCourses((prevCourses) =>
      prevCourses.filter((course) => course.id !== id)
    );
  };

  const restoreCourse = () => {
    setCourses(mockCurrentCoursesList);
  };

  return (
    <>
      <Header />
      <div className="content">
        {courses.length === 0 ? (
          <EmptyCoursesList onRestore={restoreCourse} />
        ) : (
          <>
            {currentPage.currentPage === 'coursesList' ? (
              <CoursesList
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
      </div>
    </>
  );
}

export default App;
