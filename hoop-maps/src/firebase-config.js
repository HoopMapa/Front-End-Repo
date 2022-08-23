// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_-4ZY21xYmTg7DFVov_AQbhjAem6ETS4",
  authDomain: "hoopmaps-1bb0e.firebaseapp.com",
  projectId: "hoopmaps-1bb0e",
  storageBucket: "hoopmaps-1bb0e.appspot.com",
  messagingSenderId: "1093659021998",
  appId: "1:1093659021998:web:d431206f8242bd715b933f",
  measurementId: "G-2RP0RVXDHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)