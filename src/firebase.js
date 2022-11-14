// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBceK2Je9xCr3Zi9qnmCtu2QNUiT3qnIjA",
  authDomain: "healthcare-373a0.firebaseapp.com",
  projectId: "healthcare-373a0",
  storageBucket: "healthcare-373a0.appspot.com",
  messagingSenderId: "165213437279",
  appId: "1:165213437279:web:4b7f837e21ecb5853f0aea"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.auth();
const auth = firebase.auth();

export { db, auth };
