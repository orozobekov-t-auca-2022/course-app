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
  currentPage: 'coursesList' | 'courseInfo';
}
