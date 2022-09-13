import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCwFABMbFDeiDKQqlr7oMBC7XSrdNm0EyM',
  authDomain: 'collaboration-6f83e.firebaseapp.com',
  projectId: 'collaboration-6f83e',
  storageBucket: 'collaboration-6f83e.appspot.com',
  messagingSenderId: '402725619232',
  appId: '1:402725619232:web:2f1f936de85ed1e5749e45',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// firestore
export const db = getFirestore(app);

// auth
export const auth = getAuth(app);

// storage
export const storage = getStorage(app);
