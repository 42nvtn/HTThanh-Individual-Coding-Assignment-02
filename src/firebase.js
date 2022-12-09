// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIZhE6Metr49Fi1ldEwvZdl1nr2oXDeow",
  authDomain: "todo-app-ff5c4.firebaseapp.com",
  projectId: "todo-app-ff5c4",
  storageBucket: "todo-app-ff5c4.appspot.com",
  messagingSenderId: "148443856460",
  appId: "1:148443856460:web:c3eb73bbe8b23cc24f3ee9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)