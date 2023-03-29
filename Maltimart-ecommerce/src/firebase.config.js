import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAj33D1Hg3WThe7NUhnUeE5mB2NFYxjOX0",
  authDomain: "maltimart-c2529.firebaseapp.com",
  projectId: "maltimart-c2529",
  storageBucket: "maltimart-c2529.appspot.com",
  messagingSenderId: "58895619560",
  appId: "1:58895619560:web:803a40e6f26768e7c5405d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)


export default app
