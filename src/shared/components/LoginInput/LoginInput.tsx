import { TextField } from '@mui/material';
import type { LoginInputProps } from '../../../types/types';

function LoginInput({
  htmlFor,
  label,
  type,
  placeholder,
  value,
  onChange,
  errorMessage,
}: LoginInputProps & {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      style={{ display: 'flex', flexDirection: 'column' }}
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
        value={value}
        onChange={onChange}
        error={Boolean(errorMessage)}
        helperText={errorMessage}
      />
    </label>
  );
}

export default LoginInput;
