// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK70GzWqwHzgyBc_8EBD9qF05kk7sVCFY",
  authDomain: "assignment-10-fbd63.firebaseapp.com",
  projectId: "assignment-10-fbd63",
  storageBucket: "assignment-10-fbd63.appspot.com",
  messagingSenderId: "471079043255",
  appId: "1:471079043255:web:a0217ccdd0466cd9980d32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth