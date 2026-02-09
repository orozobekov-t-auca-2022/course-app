import type {
  CourseProps,
  CoursesProps,
  CurrentPageProps,
} from '../../../types/types';
import CourseCard from '../CourseCard/CourseCard';

function CoursesList({
  filteredList,
  onDeleteCourse,
  getCourse,
}: { filteredList: CourseProps[] | undefined } & CoursesProps & {
    setCurrentPage: React.Dispatch<React.SetStateAction<CurrentPageProps>>;
    onDeleteCourse: (id: string) => void;
    getCourse: (id: string) => Promise<CourseProps>;
  }) {
  return (
    <>
      {filteredList?.map((course: CourseProps) => (
        <div key={course.id} style={{ marginBottom: '20px' }}>
          <CourseCard
            {...course}
            onClick={() => {
              getCourse(course.id);
            }}
            onDeleteCourse={onDeleteCourse}
          />
        </div>
      ))}
    </>
  );
}

export default CoursesList;
