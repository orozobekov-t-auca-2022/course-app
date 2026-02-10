import { TextField } from '@mui/material';
import type { PasswordInputProps } from '../../../types/types';

function PasswordInput({
  htmlFor,
  label,
  type,
  placeholder,
  value,
  onChange,
  errorMessage,
}: PasswordInputProps & {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      style={{ display: 'flex', flexDirection: 'column', width: '286px' }}
    >
      {label}
      <TextField
        id={htmlFor}
        name={htmlFor}
        type={type}
        placeholder={placeholder}
        required
        sx={{
          width: '286px',
          '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline':
            {
              borderColor: 'rgba(255, 0, 0, 1)',
            },
          '& .MuiFormHelperText-root.Mui-error': {
            color: 'rgba(255, 0, 0, 1)',
          },
          '& .MuiFormHelperText-root': {
            marginLeft: 0,
            marginRight: 0,
          },
        }}
        error={Boolean(errorMessage)}
        helperText={errorMessage}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default PasswordInput;
