import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIl7p2GweL3cghgcXZwP12UzsfCodQJ6Y",
  authDomain: "resto-b1040.firebaseapp.com",
  projectId: "resto-b1040",
  storageBucket: "resto-b1040.appspot.com",
  messagingSenderId: "805942072941",
  appId: "1:805942072941:web:45f03128b6c69d8efed164",
  measurementId: "G-TY1KWRL5FN",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
export { auth };
