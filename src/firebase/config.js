// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxbwrF4SqDMJMGqIxAUpNVnw5HpYxMlgk",
  authDomain: "react-cursos-8990c.firebaseapp.com",
  projectId: "react-cursos-8990c",
  storageBucket: "react-cursos-8990c.firebasestorage.app",
  messagingSenderId: "946945914067",
  appId: "1:946945914067:web:3220a0364da445784bd026"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );

// https://console.firebase.google.com/project/react-cursos-8990c/overview

