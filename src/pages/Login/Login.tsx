import LoginForm from '../../shared/components/LoginForm/LoginForm';
import type { LoginProps } from '../../types/types';
import styles from './Login.module.css';

function Login({ setUserLoggedIn, setCurrentPage }: LoginProps) {
  return (
    <div className={styles.loginPage}>
      <div className={styles.header}>
        <h2>Login</h2>
      </div>
      <div className={styles.formContainer}>
        <LoginForm
          setUserLoggedIn={setUserLoggedIn}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default Login;
