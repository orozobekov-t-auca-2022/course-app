import { TextField } from '@mui/material';
import type { PasswordInputProps } from '../../../types/types';

function PasswordInput({
  htmlFor,
  label,
  type,
  placeholder,
  pattern,
  value,
  onChange,
}: PasswordInputProps & {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  console.log(pattern);
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
        sx={{ width: '286px' }}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default PasswordInput;
