import { TextField } from '@mui/material';
import CourseButton from '../CourseButton/CourseButton';
import styles from './CourseFormModal.module.css';
import { useState } from 'react';

function AuthorNameInput({
  onCreateAuthor,
}: {
  onCreateAuthor: (authorName: string) => void;
}) {
  const [authorName, setAuthorName] = useState<string>('');

  function handleCreateAuthor() {
    if (authorName.trim()) {
      onCreateAuthor(authorName);
      setAuthorName('');
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
          value={authorName}
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
          onChange={(e) => setAuthorName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleCreateAuthor();
            }
          }}
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
