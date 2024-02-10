// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPkkveTL1YgV6z5HJO0ybHQhq5LW-NiE8",
  authDomain: "ema-john-firebase-auth-576f9.firebaseapp.com",
  projectId: "ema-john-firebase-auth-576f9",
  storageBucket: "ema-john-firebase-auth-576f9.appspot.com",
  messagingSenderId: "796448033490",
  appId: "1:796448033490:web:7d7c65d05888b080b8fb0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;