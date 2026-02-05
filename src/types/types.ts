export interface CourseProps {
  id: string;
  title: string;
  description: string;
  authors: string[];
  duration: number;
  creationDate: string;
}

export interface CoursesProps {
  courses?: CourseProps[];
}

export interface CurrentPageProps {
  currentPage: 'coursesList' | 'courseInfo' | 'login';
}

export interface LoginInputProps {
  htmlFor: string;
  label: string;
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface PasswordInputProps {
  htmlFor: string;
  label: string;
  type: 'password';
  placeholder?: string;
  pattern?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface HeaderProps {
  userLoggedIn: string | null;
  setUserLoggedIn: (username: string | null) => void;
}

export interface LoginProps {
  setUserLoggedIn: (username: string | null) => void;
  setCurrentPage: (page: {
    currentPage: 'login' | 'coursesList' | 'courseInfo';
  }) => void;
}
