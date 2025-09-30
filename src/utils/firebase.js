// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// TODO: import the values from the .env file (later)
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFEysVeRfpUeAF5_AEz-Z21_E_8DCEpEk",
  authDomain: "netflixgpt-84328.firebaseapp.com",
  projectId: "netflixgpt-84328",
  storageBucket: "netflixgpt-84328.firebasestorage.app",
  messagingSenderId: "658446639605",
  appId: "1:658446639605:web:97c62482561254c77e80bc",
  measurementId: "G-Z6RC6MW4S4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
