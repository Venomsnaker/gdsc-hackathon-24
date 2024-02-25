// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIYNEp2G93P3wT-DJTlxTvwPDGn6auMEg",
  authDomain: "gdsc-congnong.firebaseapp.com",
  databaseURL: "https://gdsc-congnong-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gdsc-congnong",
  storageBucket: "gdsc-congnong.appspot.com",
  messagingSenderId: "465566998514",
  appId: "1:465566998514:web:722061b3e0e4af683f156b",
  measurementId: "G-KCD873M1Z2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
