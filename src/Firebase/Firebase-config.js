// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmeW9KQs2XXkERsvUV-v2ajhOxzvhnuXo",
  authDomain: "coffee-store-7d6df.firebaseapp.com",
  projectId: "coffee-store-7d6df",
  storageBucket: "coffee-store-7d6df.appspot.com",
  messagingSenderId: "365930232246",
  appId: "1:365930232246:web:e0ce9084375bff51832917"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

