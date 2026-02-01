import { TextField } from '@mui/material';

function SearchInput({
  placeholder,
  className,
  onChange,
  ref,
}: {
  placeholder?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
}) {
  return (
    <TextField
      className={className}
      placeholder={placeholder}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 1)',
        color: 'rgba(207, 207, 207, 1)',
      }}
      sx={{
        '& .MuiInputBase-root': {
          height: '50px',
        },
        '& input': {
          height: '50px',
          padding: '0 0 0 16px',
        },
      }}
      onChange={onChange}
      inputRef={ref}
    />
  );
}

export default SearchInput;
