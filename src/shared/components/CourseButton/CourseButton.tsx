import { Button } from '@mui/material';

function CourseButton({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Button
      className={className}
      style={{
        backgroundColor: 'rgba(0, 114, 152, 1)',
        color: 'rgba(255, 255, 255, 1)',
        textTransform: 'uppercase',
        height: '50px',
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default CourseButton;
