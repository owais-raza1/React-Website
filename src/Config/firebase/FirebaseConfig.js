// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVzODmPKc4AkIZ86T8rWEiSUeTBrS7c14",
  authDomain: "my-project-51fa8.firebaseapp.com",
  projectId: "my-project-51fa8",
  storageBucket: "my-project-51fa8.appspot.com",
  messagingSenderId: "672106143504",
  appId: "1:672106143504:web:1502d762bbf39740e54f95",
  measurementId: "G-3J9BW0LPTX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
