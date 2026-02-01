// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf4XRROHtV1VE8FlGlo9m7PuXyAAcFqF0",
  authDomain: "react-auth-practice-e4144.firebaseapp.com",
  projectId: "react-auth-practice-e4144",
  storageBucket: "react-auth-practice-e4144.firebasestorage.app",
  messagingSenderId: "203207268426",
  appId: "1:203207268426:web:3d2206a9b8df0146f26eb3",
  measurementId: "G-ZZVR611BRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;