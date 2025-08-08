// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmuyqHnjKF2-Mp6qBlTk9z3NmB0_D19T0",
  authDomain: "krishimitra-e09a1.firebaseapp.com",
  projectId: "krishimitra-e09a1",
  storageBucket: "krishimitra-e09a1.firebasestorage.app",
  messagingSenderId: "1053034539769",
  appId: "1:1053034539769:web:9c3d0790047c7f08259028",
  measurementId: "G-SSDBMHETT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);