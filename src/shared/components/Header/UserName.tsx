import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import type { UserInfoProps } from './types';

function UserName({ userLoggedIn }: { userLoggedIn: string | null }) {
  const [userName, setUserName] = useState<string>('User');

  function getStoredUserName(): string | null {
    const rawUserInfo = localStorage.getItem('userInfo');
    if (!rawUserInfo) return null;

    try {
      const userInfo: UserInfoProps = JSON.parse(rawUserInfo);

      const fullName =
        `${userInfo.firstName ?? ''} ${userInfo.lastName ?? ''}`.trim();
      if (fullName) return fullName;

      return userInfo.firstName || userInfo.lastName;
    } catch {
      return null;
    }
  }

  useEffect(() => {
    let isMounted = true;

    async function loadUserName() {
      if (!userLoggedIn) {
        if (isMounted) {
          setUserName('User');
        }
        return;
      }

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
          const fullName =
            `${userInfo.firstName ?? ''} ${userInfo.lastName ?? ''}`.trim();

          if (fullName && isMounted) {
            setUserName(fullName);
            return;
          }
        } catch {
          console.log('');
        }
      }

      const storedName = getStoredUserName();
      if (isMounted) {
        setUserName(storedName || userLoggedIn || 'User');
      }
    }

    loadUserName();

    return () => {
      isMounted = false;
    };
  }, [userLoggedIn]);

  return <h2 className={styles.userName}>{userName}</h2>;
}

export default UserName;
