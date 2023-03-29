import { initializeApp } from "firebase/app";
import {  getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAR5bd7AbOa3wKu8a6C3pxtTtHWihqhLZo",
  authDomain: "disney-qazi.firebaseapp.com",
  projectId: "disney-qazi",
  storageBucket: "disney-qazi.appspot.com",
  messagingSenderId: "526662217769",
  appId: "1:526662217769:web:892d08c46051cd8eadac38"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;