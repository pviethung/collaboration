import { db } from 'backend/config';
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { useCallback, useState } from 'react';

export const useFirestore = (collectionPath, documentId) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  const [documentData, setDocumentData] = useState(null);
  const [collectionData, setCollectionData] = useState(null);

  const request = async (promise, setDataFn) => {
    setError(null);
    setDataFn(null);
    setIsError(false);
    setIsLoading(true);

    try {
      const res = await promise;
      if (res) setDataFn(res);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setError(error);
      setIsLoading(false);
    }
  };

  const addDocument = (data) => {
    request(addDoc(collection(db, collectionPath), data), setDocumentData);
  };

  const deleteDocument = (id) => {
    request(deleteDoc(doc(db, collectionPath, id)), setDocumentData);
  };

  const updateDocument = (data) => {
    return request(
      updateDoc(doc(db, collectionPath, documentId), data),
      setDocumentData
    );
  };

  const onSnapshotDocument = useCallback(() => {
    setIsLoading(true);
    setError(null);
    setIsError(false);
    setDocumentData(null);

    return onSnapshot(
      doc(db, collectionPath, documentId),
      (doc) => {
        setDocumentData(doc.data());
        setError(null);
        setIsError(false);
        setIsLoading(false);
      },
      (error) => {
        setDocumentData(null);
        setError(error);
        setIsError(true);
        setIsLoading(false);
      }
    );
  }, [collectionPath, documentId]);

  const onSnapshotCollection = useCallback(
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
    onSnapshotCollection,
    onSnapshotDocument,
    updateDocument,
    deleteDocument,
  };
};
