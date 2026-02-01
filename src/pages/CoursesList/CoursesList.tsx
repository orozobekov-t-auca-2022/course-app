import Course from '../../shared/components/CourseCard/CourseCard';
import CourseButton from '../../shared/components/CourseButton/CourseButton';
import CourseForm from '../../shared/components/SearchBar/SearchBar';
import styles from './CoursesList.module.css';
import type {
  CourseProps,
  CoursesListProps,
  CurrentPageProps,
} from '../../types/types';

function CoursesList({
  courses,
  setSelectedCourseId,
  setCurrentPage,
}: CoursesListProps & {
  setSelectedCourseId: React.Dispatch<React.SetStateAction<string | null>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<CurrentPageProps>>;
}) {
  return (
    <div className={styles.coursesList}>
      <div className={styles.controls}>
        <CourseForm />
        <CourseButton className={styles.addCourseButton}>
          Add New Course
        </CourseButton>
      </div>
      {courses?.map((course: CourseProps) => (
        <div key={course.title} style={{ marginBottom: '20px' }}>
          <Course
            {...course}
            onClick={() => {
              setSelectedCourseId(course.id);
              setCurrentPage({ currentPage: 'courseInfo' });
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default CoursesList;
