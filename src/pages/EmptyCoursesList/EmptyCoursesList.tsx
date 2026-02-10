import CourseButton from '../../shared/components/CourseButton/CourseButton';
import styles from './EmptyCoursesList.module.css';

function EmptyCoursesList({ onAddCourse }: { onAddCourse: () => void }) {
  return (
    <div className={styles.emptyCoursesList}>
      <h1>Your List Is Empty</h1>
      <p>Please use ’Add New Course’ button to add your first course</p>
      <CourseButton onClick={onAddCourse}>Add New Course</CourseButton>
    </div>
  );
}

export default EmptyCoursesList;
