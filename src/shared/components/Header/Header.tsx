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
        <UserName userLoggedIn={userLoggedIn} />
        <CourseButton
          className={styles.button}
          onClick={() => {
            if (userLoggedIn) {
              setUserLoggedIn(null);
              localStorage.removeItem('accessToken');
              localStorage.removeItem('userInfo');
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
