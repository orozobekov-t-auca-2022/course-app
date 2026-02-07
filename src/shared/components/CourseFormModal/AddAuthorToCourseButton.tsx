import { Button } from '@mui/material';

function AddAuthorToCourseButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      style={{ width: '13px', minWidth: '13px', padding: '0' }}
      onClick={onClick}
    >
      <svg
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.75 4H7.25M4 7.25V0.75"
          stroke="#333E48"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
  );
}

export default AddAuthorToCourseButton;
