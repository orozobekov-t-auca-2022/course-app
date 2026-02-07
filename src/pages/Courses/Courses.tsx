import CourseButton from '../../shared/components/CourseButton/CourseButton';
import SearchBar from '../../shared/components/SearchBar/SearchBar';
import styles from './Courses.module.css';
import type {
  CourseProps,
  CoursesProps,
  CurrentPageProps,
} from '../../types/types';
import { useEffect, useState } from 'react';
import CoursesList from '../../shared/components/CoursesList/CoursesList';

function Courses({
  courses,
  setSelectedCourseId,
  setCurrentPage,
  onDeleteCourse,
  getCourse,
}: CoursesProps & {
  setSelectedCourseId: React.Dispatch<React.SetStateAction<string | null>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<CurrentPageProps>>;
  onDeleteCourse: (id: string) => void;
  getCourse: (id: string) => Promise<CourseProps>;
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [coursesData, setCoursesData] = useState<typeof courses>(courses);

  async function loadCourses() {
    const response = await fetch(
      `${import.meta.env.VITE_API_KEY}courses/courses`
    );
    const data = await response.json();
    localStorage.setItem('courses', JSON.stringify(data));
    return data;
  }

  useEffect(() => {
    loadCourses().then((data) => {
      setCoursesData(data);
      localStorage.setItem('courses', JSON.stringify(data));
    });
  }, []);

  const filteredList = searchTerm
    ? coursesData?.filter(
        (course) =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : coursesData;

  return (
    <div className={styles.coursesList}>
      <div className={styles.controls}>
        <SearchBar setSearchTerm={setSearchTerm} />
        <CourseButton className={styles.addCourseButton}>
          Add New Course
        </CourseButton>
      </div>
      <CoursesList
        filteredList={filteredList}
        setCurrentPage={setCurrentPage}
        setSelectedCourseId={setSelectedCourseId}
        onDeleteCourse={onDeleteCourse}
        getCourse={getCourse}
      />
    </div>
  );
}

export default Courses;
