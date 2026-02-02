import type { CourseProps, CoursesProps } from '../../../types/types';
import CourseCard from '../CourseCard/CourseCard';

function CoursesList({
  filteredList,
  setCurrentPage,
  setSelectedCourseId,
  onDeleteCourse,
}: { filteredList: CourseProps[] | undefined } & CoursesProps & {
    setSelectedCourseId: React.Dispatch<React.SetStateAction<string | null>>;
    setCurrentPage: React.Dispatch<
      React.SetStateAction<{ currentPage: 'coursesList' | 'courseInfo' }>
    >;
    onDeleteCourse: (id: string) => void;
  }) {
  return (
    <>
      {filteredList?.map((course: CourseProps) => (
        <div key={course.id} style={{ marginBottom: '20px' }}>
          <CourseCard
            {...course}
            onClick={() => {
              setSelectedCourseId(course.id);
              setCurrentPage({ currentPage: 'courseInfo' });
            }}
            onDeleteCourse={onDeleteCourse}
          />
        </div>
      ))}
    </>
  );
}

export default CoursesList;
