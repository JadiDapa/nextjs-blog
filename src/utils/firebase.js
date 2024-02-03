// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "ngeblog-412011.firebaseapp.com",
  projectId: "ngeblog-412011",
  storageBucket: "ngeblog-412011.appspot.com",
  messagingSenderId: "281493311912",
  appId: "1:281493311912:web:96ac9f2445fd86f3decd9d",
  measurementId: "G-F4P3GFRNND",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
