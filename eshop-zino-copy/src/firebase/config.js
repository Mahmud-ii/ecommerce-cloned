import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBxZBE_h5eHFz2PZsC1r47BE7HBOrbIK4U",
  authDomain: "auth-gauth-img.firebaseapp.com",
  projectId: "auth-gauth-img",
  storageBucket: "auth-gauth-img.appspot.com",
  messagingSenderId: "626650120767",
  appId: "1:626650120767:web:f2873b5d326250bab4ae8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
