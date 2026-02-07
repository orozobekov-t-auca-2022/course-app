import { useState } from 'react';
import type { LoginProps } from '../../../types/types';
import CourseButton from '../CourseButton/CourseButton';
import LoginInput from '../LoginInput/LoginInput';
import PasswordInput from '../PasswordInput/PasswordInput';
import styles from './LoginForm.module.css';

function LoginForm({ setUserLoggedIn, setCurrentPage }: LoginProps) {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<{ login?: string; password?: string }>(
    {}
  );

  const validateForm = () => {
    const newErrors: { login?: string; password?: string } = {};

    if (!login.trim()) {
      newErrors.login = 'Login is required';
    } else if (login.length < 3) {
      newErrors.login = 'Login must be at least 3 characters long';
    } else if (login.length > 20) {
      newErrors.login = 'Login must be less than 20 characters long';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    } else if (password.length > 20) {
      newErrors.password = 'Password must be less than 20 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await fetch(import.meta.env.VITE_DUMMY_AUTH_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: login,
          password: password,
        }),
      }).then((res) => res.json());

      if (response && response.accessToken) {
        setUserLoggedIn(login);
        setCurrentPage({ currentPage: 'coursesList' });
        localStorage.setItem('userLoggedIn', login);
      } else {
        setErrors({ login: 'Invalid username or password' });
      }
    } catch {
      setErrors({
        login: 'An error occurred while logging in. Please try again.',
      });
    }
  }

  const hasErrors = Object.values(errors).some((error) => error !== undefined);
  const isFormValid = login.trim() && password && !hasErrors;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <LoginInput
        htmlFor="username"
        label="Username:"
        type="text"
        placeholder="Input text"
        value={login}
        onChange={(e) => {
          setLogin(e.target.value);
          if (errors.login) setErrors({ ...errors, login: undefined });
        }}
        errorMessage={errors.login && errors.login}
      />

      <PasswordInput
        htmlFor="password"
        label="Password:"
        type="password"
        placeholder="Input text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          if (errors.password) setErrors({ ...errors, password: undefined });
        }}
        errorMessage={errors.password && errors.password}
      />

      <CourseButton
        type="submit"
        className={styles.button}
        disabled={!isFormValid}
      >
        Login
      </CourseButton>
    </form>
  );
}

export default LoginForm;
