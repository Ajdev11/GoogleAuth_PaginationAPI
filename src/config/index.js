import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzpUc0NQaW837L0kci5t4vJG5a1Xg18v4",
  authDomain: "exam-47fd6.firebaseapp.com",
  projectId: "exam-47fd6",
  storageBucket: "exam-47fd6.appspot.com",
  messagingSenderId: "580464631631",
  appId: "1:580464631631:web:f1daceef5b2b427eaeef3a",
  measurementId: "G-EQ7660MBCL",
};

const app = initializeApp(firebaseConfig);

//setUp authProvider
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth, signInWithRedirect };
