import { auth, db } from 'backend/config';
import { signOut } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch, user } = useAuthContext();

  const logout = async () => {
    setIsError(false);
    setIsLoading(true);
    setError(null);

    try {
      await signOut(auth);
      await updateDoc(doc(db, 'users', user.uid), {
        online: false,
      });

      dispatch({ type: 'LOGOUT' });
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setError(error);
      setIsLoading(false);
    }
  };

  return {
    logout,
    isError,
    isLoading,
    error,
  };
};
