import { TextField } from '@mui/material';
import { useState } from 'react';
import styles from './CourseFormModal.module.css';

function DurationInput({
  onChange,
}: {
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) {
  const [durationInMinutes, setDurationInMinutes] = useState<number>(0);
  const [durationFormated, setDurationFormated] = useState<string>('');
  const [error, setError] = useState<string>('');

  const formatDuration = (duration: string) => {
    const minutes = Number(duration);

    if (isNaN(minutes)) {
      setError('Duration should be a number');
      return null;
    }

    setDurationInMinutes(minutes);

    if (minutes < 0) {
      setError('Duration cannot be negative');
      return null;
    } else if (duration === '') {
      setError('');
      setDurationFormated('');
      return '';
    } else if (minutes === 0) {
      setError('Duration must be greater than 0');
      setDurationFormated('');
      return null;
    }

    setError('');
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    setDurationFormated(
      `${hours.toString().padStart(2, '0')}:${remainingMinutes.toString().padStart(2, '0')}`
    );
  };

  return (
    <label
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '24px 0 32px 0',
      }}
    >
      <span className={styles.durationInputHeader}>Duration</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <TextField
          value={durationInMinutes}
          onChange={(e) => {
            formatDuration(e.target.value);
            onChange(e);
          }}
          error={!!error}
          helperText={error || 'Numeric, should be entered in minutes'}
          required={true}
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
          placeholder={'Input duration in format hh:mm'}
        />
        {error === '' && durationFormated !== '' && <p>{durationFormated}</p>}
      </div>
    </label>
  );
}

export default DurationInput;
