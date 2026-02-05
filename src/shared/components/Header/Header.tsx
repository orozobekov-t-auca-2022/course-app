import logo from '../../../assets/logo.png';
import styles from './Header.module.css';
import CourseButton from '../CourseButton/CourseButton';
import type { HeaderProps } from '../../../types/types';

function Header({
  userLoggedIn,
  setUserLoggedIn,
  setCurrentPage,
}: HeaderProps & {
  setCurrentPage: (page: {
    currentPage: 'login' | 'coursesList' | 'courseInfo';
  }) => void;
}) {
  return (
    <nav className={styles.header}>
      <img className={styles.logo} src={logo} alt="" />
      <div className={styles.userInfo}>
        <h2 className={styles.userName}>Harry Potter</h2>
        <CourseButton
          className={styles.button}
          onClick={() =>
            userLoggedIn
              ? setUserLoggedIn(null)
              : setCurrentPage({ currentPage: 'login' })
          }
        >
          {userLoggedIn ? 'LOGOUT' : 'LOGIN'}
        </CourseButton>
      </div>
    </nav>
  );
}

export default Header;
