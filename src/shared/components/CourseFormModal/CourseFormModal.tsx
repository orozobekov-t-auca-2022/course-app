import CourseButton from '../CourseButton/CourseButton';
import AuthorsList from './AuthorsList';
import AuthorNameInput from './AuthorNameInput';
import CourseAuthors from './CourseAuthors';
import DescriptionInput from './DescriptionInput';
import DurationInput from './DurationInput';
import TitleInput from './TitleInput';
import styles from './CourseFormModal.module.css';
import type { CourseProps } from '../../../types/types';
import { useState } from 'react';

function CourseFormModal({
  setOpenCourseForm,
}: {
  setOpenCourseForm: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [courseInfo, setCourseInfo] = useState<CourseProps>({
    id: '',
    title: '',
    description: '',
    creationDate: new Date().toISOString(),
    duration: 0,
    authors: [],
  });
  const [authorsList, setAuthorsList] = useState<string[]>([]);
  const [courseAuthors, setCourseAuthors] = useState<string[]>([]);

  const resetCourseInfo = () => {
    setCourseInfo({
      id: '',
      title: '',
      description: '',
      creationDate: new Date().toISOString(),
      duration: 0,
      authors: [],
    });
    setAuthorsList([]);
    setCourseAuthors([]);
  };

  const createCourse = async (course: CourseProps) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_KEY}courses/courses`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(course),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to create course');
      }

      const data = await response.json();
      console.log('Course created successfully:', data);
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  const getAllAuthors = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_KEY}authors`);
      if (!response.ok) {
        throw new Error('Failed to fetch authors');
      }
      const data = await response.json();
      console.log('Authors fetched successfully:', data);
      return data;
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };

  const createAuthor = async (authorName: string) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_KEY}/authors`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: authorName }),
      });

      if (!response.ok) {
        throw new Error('Failed to create author');
      }

      const data = await response.json();
      console.log('Author created successfully:', data);
    } catch (error) {
      console.error('Error creating author:', error);
    }
  };

  const deleteAuthor = async (authorName: string) => {
    try {
      const authors = await getAllAuthors();
      const authorToDelete = authors.find(
        (author: { name: string; id: string }) => author.name === authorName
      );
      const response = await fetch(
        `${import.meta.env.VITE_API_KEY}/authors/${authorToDelete?.id}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to delete author');
      }

      console.log('Author deleted successfully');
    } catch (error) {
      console.error('Error deleting author:', error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCourse = {
      ...courseInfo,
      id: Math.random().toString(36).substring(2, 9),
      authors: courseAuthors,
    };
    createCourse(newCourse);
    console.log('New Course Created:', newCourse);
    resetCourseInfo();
    setOpenCourseForm(false);
  };

  return (
    <div className={styles.courseForm}>
      <form className={styles.courseFormContainer} onSubmit={handleSubmit}>
        <h2 className={styles.courseFormHeader}>Course Edit/Create</h2>
        <TitleInput
          onChange={(e) =>
            setCourseInfo({ ...courseInfo, title: e.target.value })
          }
        />
        <DescriptionInput
          onChange={(e) =>
            setCourseInfo({ ...courseInfo, description: e.target.value })
          }
        />
        <div className={styles.durationAndAuthorsContainer}>
          <div className={styles.durationAndAuthorsInputsContainer}>
            <div>
              <h3 className={styles.durationSectionTitle}>Duration</h3>
              <DurationInput
                onChange={(e) =>
                  setCourseInfo({
                    ...courseInfo,
                    duration: Number(e.target.value),
                  })
                }
              />
            </div>
            <div>
              <h3 className={styles.authorsSectionTitle}>Authors</h3>
              <AuthorNameInput
                onCreateAuthor={(authorName) =>
                  setAuthorsList([...authorsList, authorName])
                }
              />
              <AuthorsList
                authors={authorsList}
                onAddAuthor={(authorName) => {
                  setCourseAuthors([...courseAuthors, authorName]);
                  createAuthor(authorName);
                }}
                onRemoveAuthor={(authorName) =>
                  setAuthorsList(
                    authorsList.filter((author) => author !== authorName)
                  )
                }
              />
            </div>
          </div>
          <div style={{ marginTop: '100px' }}>
            <h3 className={styles.courseAuthorsSectionTitle}>Course Authors</h3>
            <CourseAuthors
              authors={courseAuthors}
              onRemoveAuthor={(authorName) => {
                deleteAuthor(authorName);
                setCourseAuthors(
                  courseAuthors.filter((author) => author !== authorName)
                );
                setAuthorsList([...authorsList, authorName]);
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            marginTop: '32px',
            justifyContent: 'flex-end',
          }}
        >
          <CourseButton
            className={styles.cancelButton}
            type={'button'}
            onClick={() => {
              resetCourseInfo();
              setOpenCourseForm(false);
            }}
          >
            Cancel
          </CourseButton>
          <CourseButton className={styles.createButton} type={'submit'}>
            Create Course
          </CourseButton>
        </div>
      </form>
    </div>
  );
}

export default CourseFormModal;
