import { TextField } from '@mui/material';

function SearchInput({
  placeholder,
  className,
}: {
  placeholder?: string;
  className?: string;
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
    />
  );
}

export default SearchInput;
