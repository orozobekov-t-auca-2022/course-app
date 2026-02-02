import { Button } from '@mui/material';

function CourseButton({
  children,
  className,
  onClick,
  type,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'submit' | 'button' | 'reset';
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
      type={type}
    >
      {children}
    </Button>
  );
}

export default CourseButton;
