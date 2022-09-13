import { auth, db } from 'backend/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsError(false);
    setIsLoading(true);
    setError(null);

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      await updateDoc(doc(db, 'users', user.uid), {
        online: true,
      });

      dispatch({ type: 'LOGIN', payload: user });
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setError(error);
      setIsLoading(false);
    }
  };

  return {
    login,
    isLoading,
    isError,
    error,
  };
};
