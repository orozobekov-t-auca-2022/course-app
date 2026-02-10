import CourseButton from '../../shared/components/CourseButton/CourseButton';
import SearchBar from '../../shared/components/SearchBar/SearchBar';
import styles from './Courses.module.css';
import type {
  CourseProps,
  CoursesProps,
  CurrentPageProps,
} from '../../types/types';
import { useState } from 'react';
import CoursesList from '../../shared/components/CoursesList/CoursesList';

function Courses({
  courses,
  setCurrentPage,
  onDeleteCourse,
  getCourse,
  onAddCourse,
}: CoursesProps & {
  setCurrentPage: React.Dispatch<React.SetStateAction<CurrentPageProps>>;
  onDeleteCourse: (id: string) => Promise<void>;
  getCourse: (id: string) => Promise<CourseProps>;
  onAddCourse: () => void;
}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleDeleteCourse = async (id: string) => {
    await onDeleteCourse(id);
  };

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
        <CourseButton className={styles.addCourseButton} onClick={onAddCourse}>
          Add New Course
        </CourseButton>
      </div>
      <CoursesList
        filteredList={filteredList}
        setCurrentPage={setCurrentPage}
        onDeleteCourse={handleDeleteCourse}
        getCourse={getCourse}
      />
    </div>
  );
}

export default Courses;
