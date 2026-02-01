import { TextField } from '@mui/material';

function SearchInput({
  placeholder,
  className,
  onChange,
}: {
  placeholder?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <TextField
      className={className}
      placeholder={placeholder}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 1)',
        color: 'rgba(207, 207, 207, 1)',
        height: '50px',
        padding: '0',
      }}
      onChange={onChange}
    />
  );
}

export default SearchInput;
