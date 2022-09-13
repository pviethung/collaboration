import { db } from 'backend/config';
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  // deleteDoc,
  // doc,
} from 'firebase/firestore';
import { useCallback, useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useFirestore = (collectionPath) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  // const [data, setData] = useState(null);

  const [documentData, setDocumentData] = useState(null);
  const [collectionData, setCollectionData] = useState(null);
  const { user } = useAuthContext();

  const request = async (promise, setDataFn) => {
    setError(null);
    // setData(null);

    setDataFn(null);
    setIsError(false);
    setIsLoading(true);

    try {
      const res = await promise;
      //   setData(res);

      setDataFn(res);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setError(error);
      setIsLoading(false);
    }
  };

  const addDocument = (name, details, dueDate, category, assignTo) => {
    request(
      addDoc(collection(db, collectionPath), {
        name,
        details,
        uid: user.uid,
        dueDate,
        category,
        assignTo,
      }),
      setDocumentData
    );
  };
  /*
    const deleteDocument = (id) => {
      request(deleteDoc(doc(db, 'transactions', id)));
    };
  */

  const onSnapshotDocument = useCallback(
    (queryOptions) => {
      const constraints = [];
      if (queryOptions?.where) {
        const whereConstrains = [];

        queryOptions.where.forEach((constraint) => {
          whereConstrains.push(where(...constraint));
        });

        constraints.push(...whereConstrains);
      }

      if (queryOptions?.orderBy) {
        constraints.push(orderBy(...queryOptions.orderBy));
      }

      const q = query(collection(db, collectionPath), ...constraints);

      return onSnapshot(
        q,
        (snapshot) => {
          const results = [];
          snapshot.forEach((doc) => {
            results.push({ ...doc.data(), id: doc.id });
          });

          setCollectionData(results);
          setError(null);
          setIsError(false);
        },
        (error) => {
          setCollectionData(null);
          setError(error);
          setIsError(true);
        }
      );
    },
    [collectionPath]
  );

  return {
    // data,
    isLoading,
    isError,
    error,
    addDocument,
    documentData,
    collectionData,
    onSnapshotDocument,
    /*
      deleteDocument,
      */
  };
};
