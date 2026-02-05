import { TextField } from '@mui/material';
import type { LoginInputProps } from '../../../types/types';

function LoginInput({
  htmlFor,
  label,
  type,
  placeholder,
  value,
  onChange,
}: LoginInputProps & {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
        sx={{ width: '286px' }}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default LoginInput;
