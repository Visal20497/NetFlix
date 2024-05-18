// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAP6GQ4qmcbkvUMW23AnZ9t51d923JiPQ",
  authDomain: "netflix-7333f.firebaseapp.com",
  projectId: "netflix-7333f",
  storageBucket: "netflix-7333f.appspot.com",
  messagingSenderId: "545940144912",
  appId: "1:545940144912:web:81656acdbd38e7b8bb9b95",
  measurementId: "G-X5LYZZTR6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
