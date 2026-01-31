import type { CourseProps } from "../../shared/components/CourseCard/CourseCard";
import Course from "../../shared/components/CourseCard/CourseCard";
import CourseButton from "../../shared/components/CourseButton/CourseButton";
import CourseForm from "../../shared/components/SearchBar/SearchBar";
import styles from "./CoursesList.module.css"

interface CoursesListProps {
  courses?: CourseProps[];
}

function CoursesList({courses}: CoursesListProps) {
  return <div className={styles.coursesList}>
    <div className={styles.controls}>
      <CourseForm />
      <CourseButton className={styles.addCourseButton}>Add New Course</CourseButton>
    </div>
    {
      courses?.map((course: CourseProps) => <div key={course.title} style={{marginBottom: "20px"}}><Course {...course} /></div>)
    }
  </div>
}

export default CoursesList;