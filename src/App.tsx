import './App.css';
import CoursesList from './pages/CoursesList/CoursesList';
import Header from './shared/components/Header/Header';
import './App.css';
import { mockCurrentCoursesList } from './mocks/mockCoursesList';
import EmptyCoursesList from './pages/EmptyCoursesList/EmptyCoursesList';
import { useState } from 'react';
import type { CurrentPageProps } from './types/types';
import CourseInfo from './pages/CourseInfo/CourseInfo';

function App() {
  const [currentPage, setCurrentPage] = useState<CurrentPageProps>({
    currentPage: 'coursesList',
  });

  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  return (
    <>
      <Header />
      <div className="content">
        {mockCurrentCoursesList.length === 0 ? (
          <EmptyCoursesList />
        ) : (
          <>
            {currentPage.currentPage === 'coursesList' ? (
              <CoursesList
                courses={mockCurrentCoursesList}
                setSelectedCourseId={setSelectedCourseId}
                setCurrentPage={setCurrentPage}
              />
            ) : (
              <CourseInfo
                selectedCourseId={selectedCourseId}
                mockCurrentCoursesList={mockCurrentCoursesList}
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
