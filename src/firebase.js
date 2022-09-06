// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_UI-SWz9ryZXm5HZAGQM0jKioEwOq7fc",
  authDomain: "twitter-4d7fa.firebaseapp.com",
  projectId: "twitter-4d7fa",
  storageBucket: "twitter-4d7fa.appspot.com",
  messagingSenderId: "410097261331",
  appId: "1:410097261331:web:e2b70939a443a9d91218e6",
  measurementId: "G-K107G03LJW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
