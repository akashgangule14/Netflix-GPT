// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF_KUnqMYW0BBrCHDlN_SBC0SK-TugkV8",
  authDomain: "netflixgpt-a8174.firebaseapp.com",
  projectId: "netflixgpt-a8174",
  storageBucket: "netflixgpt-a8174.appspot.com",
  messagingSenderId: "919862137756",
  appId: "1:919862137756:web:ec7350f990954e71c0ee59",
  measurementId: "G-RYBJX17M8V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();