import CourseButton from "../CourseButton/CourseButton";
import SearchInput from "../SearchInput/SearchInput";
import styles from "./SearchBar.module.css"

function SearchBar() {
  return <form className={styles.form}>
    <div className={styles.searchField}>
      <SearchInput className={styles.input} placeholder="Input text"/>
      <CourseButton className={styles.searchButton}>Send</CourseButton>
    </div>
  </form>
}

export default SearchBar;