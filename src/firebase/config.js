// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Dev/Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyCxbwrF4SqDMJMGqIxAUpNVnw5HpYxMlgk",
//   authDomain: "react-cursos-8990c.firebaseapp.com",
//   projectId: "react-cursos-8990c",
//   storageBucket: "react-cursos-8990c.firebasestorage.app",
//   messagingSenderId: "946945914067",
//   appId: "1:946945914067:web:3220a0364da445784bd026"
// };

// Testing
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA57OMTLYWYqvRo4aOBHy5Mc0Pj9WOj-Ag",
  authDomain: "react-cursos-testing-948d0.firebaseapp.com",
  projectId: "react-cursos-testing-948d0",
  storageBucket: "react-cursos-testing-948d0.firebasestorage.app",
  messagingSenderId: "917770791920",
  appId: "1:917770791920:web:bbb520e4b212c2d8a7cb35",
  measurementId: "G-R9T2VH7F8G"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );

// https://console.firebase.google.com/project/react-cursos-8990c/overview

