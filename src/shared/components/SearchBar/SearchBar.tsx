import type { CourseProps } from '../../../types/types';
import CourseButton from '../CourseButton/CourseButton';
import SearchInput from '../SearchInput/SearchInput';
import styles from './SearchBar.module.css';

function SearchBar({
  setFilteredList,
  courses,
}: {
  setFilteredList: React.Dispatch<React.SetStateAction<CourseProps[]>>;
  courses: CourseProps[];
}) {
  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const searchTerm = (
      event.currentTarget.elements[0] as HTMLInputElement
    ).value.toLowerCase();
    setFilteredList(
      courses.filter(
        (course) =>
          course.title.toLowerCase().includes(searchTerm) ||
          course.description.toLowerCase().includes(searchTerm)
      )
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.searchField}>
        <SearchInput className={styles.input} placeholder="Input text" />
        <CourseButton className={styles.searchButton} type="submit">
          Search
        </CourseButton>
      </div>
    </form>
  );
}

export default SearchBar;
