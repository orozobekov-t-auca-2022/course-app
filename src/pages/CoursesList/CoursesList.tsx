import CourseCard from '../../shared/components/CourseCard/CourseCard';
import CourseButton from '../../shared/components/CourseButton/CourseButton';
import SearchBar from '../../shared/components/SearchBar/SearchBar';
import styles from './CoursesList.module.css';
import type {
  CourseProps,
  CoursesListProps,
  CurrentPageProps,
} from '../../types/types';
import { useState } from 'react';

function CoursesList({
  courses,
  setSelectedCourseId,
  setCurrentPage,
  onDeleteCourse,
}: CoursesListProps & {
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
      {filteredList?.map((course: CourseProps) => (
        <div key={course.id} style={{ marginBottom: '20px' }}>
          <CourseCard
            {...course}
            onClick={() => {
              setSelectedCourseId(course.id);
              setCurrentPage({ currentPage: 'courseInfo' });
            }}
            onDeleteCourse={onDeleteCourse}
          />
        </div>
      ))}
    </div>
  );
}

export default CoursesList;
