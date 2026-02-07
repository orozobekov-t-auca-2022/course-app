import { Button } from '@mui/material';

function CourseButton({
  children,
  className,
  onClick,
  type,
  disabled,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
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
      disabled={disabled}
    >
      {children}
    </Button>
  );
}

export default CourseButton;
