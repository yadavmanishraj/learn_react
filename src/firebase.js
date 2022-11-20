// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOF3EUc36XJ_B_NJibaKYOfjt8Ycdh4i0",
  authDomain: "testing-453423423423.firebaseapp.com",
  projectId: "testing-453423423423",
  storageBucket: "testing-453423423423.appspot.com",
  messagingSenderId: "1049271419913",
  appId: "1:1049271419913:web:3a5ef515ee02f5a66964d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {db, auth, app}