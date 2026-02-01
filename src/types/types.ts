export interface CourseProps {
  id: string;
  title: string;
  description: string;
  authors: string[];
  duration: number;
  creationDate: string;
}

export interface CoursesListProps {
  courses?: CourseProps[];
}

export interface CurrentPageProps {
  currentPage: 'coursesList' | 'courseInfo';
}
