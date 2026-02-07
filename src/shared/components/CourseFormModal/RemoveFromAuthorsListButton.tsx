import { Button } from '@mui/material';

function RemoveFromAuthorsListButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      style={{ width: '13px', minWidth: '13px', padding: '0' }}
      onClick={onClick}
    >
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 2.90583C8.69625 2.72708 6.88167 2.635 5.0725 2.635C4 2.635 2.9275 2.68917 1.855 2.7975L0.75 2.90583M3.72917 2.35875L3.84833 1.64917C3.935 1.13458 4 0.75 4.91542 0.75H6.33458C7.25 0.75 7.32042 1.15625 7.40167 1.65458L7.52083 2.35875M9.33542 4.6175L8.98333 10.0721C8.92375 10.9225 8.875 11.5833 7.36375 11.5833H3.88625C2.375 11.5833 2.32625 10.9225 2.26667 10.0721L1.91458 4.6175M4.72042 8.60417H6.52417M4.27083 6.4375H6.97917"
          stroke="#333E48"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
  );
}

export default RemoveFromAuthorsListButton;
