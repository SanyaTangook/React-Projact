// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8IjQVB0qKFxx2-pCPQ94tD6mVOB5zLN0",
  authDomain: "glossy-depot-329606.firebaseapp.com",
  projectId: "glossy-depot-329606",
  storageBucket: "glossy-depot-329606.appspot.com",
  messagingSenderId: "262989939069",
  appId: "1:262989939069:web:89b38544bf6d0522ec0c14",
  measurementId: "G-Y4N5DPHP6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);