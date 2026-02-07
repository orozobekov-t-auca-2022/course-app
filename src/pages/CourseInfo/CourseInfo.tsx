import CourseButton from '../../shared/components/CourseButton/CourseButton';
import CourseInfoCard from '../../shared/components/CourseInfoCard/CourseInfoCard';
import CourseInfoTitle from '../../shared/components/CourseInfoTitle/CourseInfoTitle';
import type { CourseProps, CurrentPageProps } from '../../types/types';
import styles from './CourseInfo.module.css';

function CourseInfo({
  selectedCourseId,
  mockCurrentCoursesList,
  setCurrentPage,
  currentCourseInfo,
}: {
  selectedCourseId: string | null;
  mockCurrentCoursesList: typeof import('../../mocks/mockCoursesList').mockCurrentCoursesList;
  setCurrentPage: React.Dispatch<React.SetStateAction<CurrentPageProps>>;
  currentCourseInfo: CourseProps;
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
        <CourseInfoTitle title={currentCourseInfo.title} />
      </div>
      <div className={styles.courseInfo}>
        <CourseInfoCard
          id={currentCourseInfo.id}
          description={currentCourseInfo.description}
          authors={currentCourseInfo.authors}
          duration={currentCourseInfo.duration}
          creationDate={currentCourseInfo.creationDate}
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
