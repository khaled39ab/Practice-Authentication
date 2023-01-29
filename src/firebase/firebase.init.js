// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbfvJyQz4IPQHvSUr-k7x1Js-d2Nle3D0",
  authDomain: "authentication-practice-8ffe6.firebaseapp.com",
  projectId: "authentication-practice-8ffe6",
  storageBucket: "authentication-practice-8ffe6.appspot.com",
  messagingSenderId: "1026174988655",
  appId: "1:1026174988655:web:0dcba7f3028cf8b242789a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;