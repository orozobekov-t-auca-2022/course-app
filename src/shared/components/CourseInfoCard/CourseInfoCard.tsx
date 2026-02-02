import { mockedAuthorsList } from '../../../mocks/mockCoursesList';
import type { CourseProps } from '../../../types/types';
import CourseInfoCardRow from '../CourseInfoCardRow/CourseInfoCardRow';
import styles from './CourseInfoCard.module.css';

function CourseInfoCard({
  id,
  description,
  authors,
  duration,
  creationDate,
}: Partial<CourseProps>) {
  if (!duration || !creationDate) {
    return null;
  }
  const formatedDuration =
    Math.floor(duration / 60) + ':' + (duration % 60) + ' hours';

  const formatedDate = creationDate?.replaceAll('/', '.');
  const authorsList = authors
    ?.map(
      (author) =>
        mockedAuthorsList.find((mockedAuthor) => mockedAuthor.id === author)
          ?.name
    )
    ?.join(', ');

  return (
    <div className={styles.courseInfoCard}>
      <h2>Description:</h2>
      <div className={styles.courseDetails}>
        <p className={styles.description}>
          {description || 'No description available.'}
        </p>
        <hr className={styles.separator} />
        <div className={styles.courseInfo}>
          <CourseInfoCardRow title="ID:" value={id || 'N/A'} />
          <CourseInfoCardRow title="Duration:" value={formatedDuration} />
          <CourseInfoCardRow title="Created:" value={formatedDate} />
          <CourseInfoCardRow title="Authors:" value={authorsList || 'N/A'} />
        </div>
      </div>
    </div>
  );
}

export default CourseInfoCard;
