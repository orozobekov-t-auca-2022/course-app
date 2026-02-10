import { useEffect, useState } from 'react';
import styles from './Header.module.css';

function UserName({ userLoggedIn }: { userLoggedIn: string | null }) {
  const [userName, setUserName] = useState<string>('User');

  async function getUserName(): Promise<string> {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_DUMMY_AUTH_API}me`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const userInfo = await response.json();
        const name = `${userInfo.firstName} ${userInfo.lastName}`;
        return name || 'User';
      } catch {
        return 'User';
      }
    }

    return 'User';
  }

  useEffect(() => {
    getUserName().then(setUserName);
  }, [userLoggedIn]);

  return <h2 className={styles.userName}>{userName}</h2>;
}

export default UserName;
