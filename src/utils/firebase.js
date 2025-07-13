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
  apiKey: "AIzaSyB2eUi0uZ10XB86GUKPoB2uEwYjuDl0Dug",
  authDomain: "netflixgpt-24466.firebaseapp.com",
  projectId: "netflixgpt-24466",
  storageBucket: "netflixgpt-24466.firebasestorage.app",
  messagingSenderId: "181751824502",
  appId: "1:181751824502:web:fa388308a970fde16c9f57",
  measurementId: "G-S0DBDM4CF6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();