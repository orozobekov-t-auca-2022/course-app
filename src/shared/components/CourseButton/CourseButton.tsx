import { Button } from '@mui/material';

function CourseButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
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
    >
      {children}
    </Button>
  );
}

export default CourseButton;
