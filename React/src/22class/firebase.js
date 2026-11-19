// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { App } from "./app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5-_uqP_M_mdXesTbqjBedBezq_8X6gZA",
  authDomain: "firstdiy-3e8de.firebaseapp.com",
  databaseURL: "https://firstdiy-3e8de-default-rtdb.firebaseio.com",
  projectId: "firstdiy-3e8de",
  storageBucket: "firstdiy-3e8de.firebasestorage.app",
  messagingSenderId: "800418787368",
  appId: "1:800418787368:web:217457847f7771eaf8451d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;