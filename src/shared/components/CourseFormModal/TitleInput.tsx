import { TextField } from '@mui/material';
import styles from './CourseFormModal.module.css';
import { useState } from 'react';

function TitleInput({
  onChange,
}: {
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) {
  const [title, setTitle] = useState<string>('');
  const [error, setError] = useState<string>('');

  const validateTitle = (title: string) => {
    if (title.trim() === '') {
      setError('Title is required');
    } else if (title.length < 2) {
      setError('Title must be at least 2 characters');
    } else {
      setError('');
    }
  };

  const handleTitleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    validateTitle(newTitle);
    onChange(e);
  };

  return (
    <label className={styles.titleInput}>
      <span className={styles.titleInputHeader}>Title</span>
      <TextField
        value={title}
        id="course-title"
        sx={{
          width: '100%',
          '& .MuiInputBase-root': {
            height: '50px',
          },
          '& input': {
            height: '50px',
            padding: '0 0 0 16px',
          },
        }}
        placeholder={'Input Text'}
        onChange={(e) => {
          handleTitleChange(e);
        }}
        error={!!error}
        helperText={error || 'Enter the course title'}
        required={true}
      />
    </label>
  );
}

export default TitleInput;
