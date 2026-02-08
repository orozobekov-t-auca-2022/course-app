import styles from './Header.module.css';
import CourseButton from '../CourseButton/CourseButton';
import type { HeaderProps } from '../../../types/types';
import Logo from './Logo';
import UserName from './UserName';

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
      <Logo />
      <div className={styles.userInfo}>
        <UserName />
        <CourseButton
          className={styles.button}
          onClick={() => {
            if (userLoggedIn) {
              setUserLoggedIn(null);
              localStorage.setItem('userLoggedIn', '');
              localStorage.setItem('userInfo', '');
            } else {
              setCurrentPage({ currentPage: 'login' });
            }
          }}
        >
          {userLoggedIn ? 'LOGOUT' : 'LOGIN'}
        </CourseButton>
      </div>
    </nav>
  );
}

export default Header;
