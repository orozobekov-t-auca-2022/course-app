import { useState } from 'react';
import type { LoginProps } from '../../../types/types';
import CourseButton from '../CourseButton/CourseButton';
import LoginInput from '../LoginInput/LoginInput';
import PasswordInput from '../PasswordInput/PasswordInput';
import styles from './LoginForm.module.css';

function LoginForm({ setUserLoggedIn, setCurrentPage }: LoginProps) {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(login, password);
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: login,
        password: password,
      }),
    }).then((res) => res.json());
    console.log('Login response:', response);
    if (response && response.accessToken) {
      setUserLoggedIn(login);
      setCurrentPage({ currentPage: 'coursesList' });
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <LoginInput
        htmlFor="username"
        label="Username:"
        type="text"
        placeholder="Input text"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <PasswordInput
        htmlFor="password"
        label="Password:"
        type="password"
        placeholder="Input text"
        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <CourseButton type="submit" className={styles.button}>
        Login
      </CourseButton>
    </form>
  );
}

export default LoginForm;
