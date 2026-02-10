import { TextField } from '@mui/material';
import styles from './CourseFormModal.module.css';
import { useState } from 'react';

function DescriptionInput({
  onChange,
}: {
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}) {
  const [description, setDescription] = useState<string>('');
  const [error, setError] = useState<string>('');

  const validateDescription = (description: string) => {
    if (description.trim() === '') {
      setError('Description is required');
    } else if (description.length < 2) {
      setError('Description must be at least 2 characters');
    } else {
      setError('');
    }
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const newDescription = e.target.value;
    setDescription(newDescription);
    validateDescription(newDescription);
    onChange(e);
  };

  return (
    <label className={styles.textarea}>
      <span className={styles.descriptionInputHeader}>Description</span>
      <TextField
        value={description}
        multiline
        minRows={3}
        sx={{
          width: '100%',
          '& .MuiFormHelperText-root': {
            marginLeft: 0,
            marginRight: 0,
          },
        }}
        placeholder={'Input Text'}
        onChange={handleDescriptionChange}
        error={!!error}
        helperText={error || 'Enter the course description'}
      />
    </label>
  );
}

export default DescriptionInput;
