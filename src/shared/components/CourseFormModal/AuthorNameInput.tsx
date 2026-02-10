import { TextField } from '@mui/material';
import CourseButton from '../CourseButton/CourseButton';
import styles from './CourseFormModal.module.css';
import { useState } from 'react';
import type { AuthorProps } from './types';

function AuthorNameInput({
  onCreateAuthor,
}: {
  onCreateAuthor: (authorName: string) => void;
}) {
  const [authorName, setAuthorName] = useState<AuthorProps>({
    id: '',
    name: '',
  });
  const [error, setError] = useState<string>('');

  function handleCreateAuthor() {
    if (!authorName.name.trim()) {
      setError('Author name cannot be empty');
      return;
    } else if (authorName.name.trim().length < 2) {
      setError('Author name must be at least 2 characters long');
      return;
    }
    if (authorName.name.trim()) {
      const newAuthor = authorName.name;
      onCreateAuthor(newAuthor);
      setAuthorName({ id: '', name: '' });
      setError('');
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '24px 0 32px 0',
      }}
    >
      <span className={styles.authorNameInputHeader}>Author Name</span>
      <div style={{ display: 'flex', gap: '16px' }}>
        <TextField
          value={authorName.name}
          placeholder={'Input text'}
          sx={{
            maxWidth: '400px',
            width: '100%',
            '& .MuiInputBase-root': {
              height: '50px',
            },
            '& input': {
              height: '50px',
              padding: '0 0 0 16px',
            },
          }}
          onChange={(e) =>
            setAuthorName({ ...authorName, name: e.target.value })
          }
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleCreateAuthor();
            }
          }}
          error={!!error}
          helperText={error}
        />
        <CourseButton
          className={styles.createAuthorButton}
          type={'button'}
          onClick={handleCreateAuthor}
        >
          Create Author
        </CourseButton>
      </div>
    </div>
  );
}

export default AuthorNameInput;
