// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfdbaQRQdeskJglWnuFWcVpokDLekay1w",
  authDomain: "ema-john-auth-2.firebaseapp.com",
  projectId: "ema-john-auth-2",
  storageBucket: "ema-john-auth-2.appspot.com",
  messagingSenderId: "831434611632",
  appId: "1:831434611632:web:6322b1195d3a3a0d8bd475"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;