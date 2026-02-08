// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClBeJa4MxVyb8HnQ1fWDnFHFr2F6Ez0SU",
  authDomain: "hospital-management-fabfd.firebaseapp.com",
  projectId: "hospital-management-fabfd",
  storageBucket: "hospital-management-fabfd.firebasestorage.app",
  messagingSenderId: "344204399932",
  appId: "1:344204399932:web:77aeb8a29e88468bb07a39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);