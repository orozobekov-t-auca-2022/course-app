import { useEffect, useState } from 'react';
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
  const loadAuthor = async (authorId: string) => {
    const response = await fetch(
      `${import.meta.env.VITE_DUMMY_AUTHORS_API}/${authorId}`
    );
    const data = await response.json();
    return data.name;
  };

  const [authorsList, setAuthorsList] = useState<string>('');

  useEffect(() => {
    const fetchAuthors = async () => {
      if (!authors) return;
      try {
        const authorNames = await Promise.all(
          authors.map((author) => loadAuthor(author))
        );
        setAuthorsList(authorNames.join(', '));
      } catch (error) {
        console.error('Failed to load authors:', error);
        setAuthorsList('Unknown Authors');
      }
    };

    fetchAuthors();
  }, [authors]);
  if (!duration || !creationDate) {
    return null;
  }

  const formatedDuration =
    Math.floor(duration / 60) + ':' + (duration % 60) + ' hours';

  const formatedDate = new Date(creationDate)
    .toLocaleDateString('en-GB')
    .replaceAll('/', '.');

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
