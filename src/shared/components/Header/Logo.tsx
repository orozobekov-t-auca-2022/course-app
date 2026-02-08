import logo from '../../../assets/logo.png';
import styles from './Header.module.css';

function Logo() {
  return <img className={styles.logo} src={logo} alt="Logo" />;
}

export default Logo;
