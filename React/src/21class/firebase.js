// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhsxwX3CUpvuCXIyWdPVaP1vQj6tzNyCI",
  authDomain: "for-demo-55c47.firebaseapp.com",
  databaseURL: "https://for-demo-55c47-default-rtdb.firebaseio.com",
  projectId: "for-demo-55c47",
  storageBucket: "for-demo-55c47.firebasestorage.app",
  messagingSenderId: "1079744485005",
  appId: "1:1079744485005:web:b611c558062807ad8174c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;