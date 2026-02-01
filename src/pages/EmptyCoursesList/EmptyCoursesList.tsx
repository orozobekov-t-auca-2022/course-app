import CourseButton from '../../shared/components/CourseButton/CourseButton';
import styles from './EmptyCoursesList.module.css';

function EmptyCoursesList() {
  return (
    <div className={styles.emptyCoursesList}>
      <h1>Your List Is Empty</h1>
      <p>Please use ’Add New Course’ button to add your first course</p>
      <CourseButton>Add New Course</CourseButton>
    </div>
  );
}

export default EmptyCoursesList;
