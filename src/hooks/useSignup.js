import { auth, storage } from 'backend/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from 'backend/config';
import { collection, doc, setDoc } from 'firebase/firestore';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (
    email,
    password,
    firstName,
    lastName,
    profilePictureFile
  ) => {
    setIsError(false);
    setIsLoading(true);
    setError(null);

    try {
      // create user
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // add image to storage
      const storageRef = ref(
        storage,
        `profilePictures/${user.uid}/${profilePictureFile.name}`
      );
      await uploadBytes(storageRef, profilePictureFile);
      const photoURL = await getDownloadURL(storageRef);

      // update displayName and photoUrl
      await updateProfile(user, {
        displayName: firstName,
        photoURL,
      });

      // add user to collection users
      await setDoc(doc(db, 'users', user.uid), {
        id: user.uid,
        displayName: firstName,
        firstName,
        lastName,
        photoURL,
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
    signup,
    isLoading,
    isError,
    error,
  };
};
