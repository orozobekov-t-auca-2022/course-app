import CourseButton from '../../shared/components/CourseButton/CourseButton';
import SearchBar from '../../shared/components/SearchBar/SearchBar';
import styles from './Courses.module.css';
import type { CoursesProps, CurrentPageProps } from '../../types/types';
import { useState } from 'react';
import CoursesList from '../../shared/components/CoursesList/CoursesList';

function Courses({
  courses,
  setSelectedCourseId,
  setCurrentPage,
  onDeleteCourse,
}: CoursesProps & {
  setSelectedCourseId: React.Dispatch<React.SetStateAction<string | null>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<CurrentPageProps>>;
  onDeleteCourse: (id: string) => void;
}) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredList = searchTerm
    ? courses?.filter(
        (course) =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : courses;

  return (
    <div className={styles.coursesList}>
      <div className={styles.controls}>
        <SearchBar setSearchTerm={setSearchTerm} />
        <CourseButton className={styles.addCourseButton}>
          Add New Course
        </CourseButton>
      </div>
      <CoursesList
        filteredList={filteredList}
        setCurrentPage={setCurrentPage}
        setSelectedCourseId={setSelectedCourseId}
        onDeleteCourse={onDeleteCourse}
      />
    </div>
  );
}

export default Courses;
