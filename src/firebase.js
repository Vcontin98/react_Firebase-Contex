// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfKkCBj82oweZPAQQmW4CIJGQuOluC7sg",
  authDomain: "reactbook-june-2022-62e1f.firebaseapp.com",
  projectId: "reactbook-june-2022-62e1f",
  storageBucket: "reactbook-june-2022-62e1f.appspot.com",
  messagingSenderId: "564774439256",
  appId: "1:564774439256:web:a685cbc8bdde65a336bd2d"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;