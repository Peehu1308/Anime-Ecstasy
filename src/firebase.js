import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  inMemoryPersistence,
} from 'firebase/auth';

import { getFirestore } from 'firebase/firestore'; // ✅ Firestore import

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

// ✅ Auth setup
const auth = getAuth(app);
setPersistence(auth, inMemoryPersistence).catch((error) => {
  console.error("Firebase persistence error:", error);
});
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// ✅ Firestore setup
const db = getFirestore(app);

export { auth, provider, db };
