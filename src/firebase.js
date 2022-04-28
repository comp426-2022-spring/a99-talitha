// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDG7rI2uVabmklOBYVuHE5nY7CpCqrKS7g",
  authDomain: "comp426-b1832.firebaseapp.com",
  projectId: "comp426-b1832",
  storageBucket: "comp426-b1832.appspot.com",
  messagingSenderId: "412395717971",
  appId: "1:412395717971:web:d0e530901578c4e618cda6",
  measurementId: "G-7M4B9QYCGV"
}

// Initialize Firebase
let app;
if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
}

// Initialize service

const auth = firebase.auth();

export { auth, app };