import logo from '../../../assets/logo.png';
import styles from './Header.module.css';
import CourseButton from '../CourseButton/CourseButton';

function Header() {
  return (
    <nav className={styles.header}>
      <img className={styles.logo} src={logo} alt="" />
      <div className={styles.userInfo}>
        <h2 className={styles.userName}>Harry Potter</h2>
        <CourseButton className={styles.button}>LOGOUT</CourseButton>
      </div>
    </nav>
  );
}

export default Header;
