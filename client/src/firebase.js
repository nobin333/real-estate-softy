// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-app-80b84.firebaseapp.com",
  projectId: "real-estate-app-80b84",
  storageBucket: "real-estate-app-80b84.firebasestorage.app",
  messagingSenderId: "820632548027",
  appId: "1:820632548027:web:f164c1df003ccb9b7eef9e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);