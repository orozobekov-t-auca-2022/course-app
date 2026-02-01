import { useRef } from 'react';
import CourseButton from '../CourseButton/CourseButton';
import SearchInput from '../SearchInput/SearchInput';
import styles from './SearchBar.module.css';

function SearchBar({
  setSearchTerm,
}: {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearchTerm(inputRef.current?.value || '');
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
