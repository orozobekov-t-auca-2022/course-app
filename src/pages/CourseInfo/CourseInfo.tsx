import CourseButton from '../../shared/components/CourseButton/CourseButton';
import CourseInfoCard from '../../shared/components/CourseInfoCard/CourseInfoCard';
import CourseInfoTitle from '../../shared/components/CourseInfoTitle/CourseInfoTitle';
import type { CurrentPageProps } from '../../types/types';
import styles from './CourseInfo.module.css';

function CourseInfo({
  selectedCourseId,
  mockCurrentCoursesList,
  setCurrentPage,
}: {
  selectedCourseId: string | null;
  mockCurrentCoursesList: typeof import('../../mocks/mockCoursesList').mockCurrentCoursesList;
  setCurrentPage: React.Dispatch<React.SetStateAction<CurrentPageProps>>;
}) {
  const course = mockCurrentCoursesList.find(
    (course) => course.id === selectedCourseId
  );

  if (!course) {
    return null;
  }

  return (
    <div className={styles.courseInfoPage}>
      <div className={styles.title}>
        <CourseInfoTitle title={course.title} />
      </div>
      <div className={styles.courseInfo}>
        <CourseInfoCard
          id={course.id}
          description={course.description}
          authors={course.authors}
          duration={course.duration}
          creationDate={course.creationDate}
        />
      </div>
      <div className={styles.buttonContainer}>
        <CourseButton
          onClick={() => setCurrentPage({ currentPage: 'coursesList' })}
          className={styles.backButton}
        >
          Back
        </CourseButton>
      </div>
    </div>
  );
}

export default CourseInfo;
