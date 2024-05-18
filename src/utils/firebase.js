// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcIW6vzCjnlaI1E036W48CFSSvUeKwBQc",
  authDomain: "netflix-2c827.firebaseapp.com",
  projectId: "netflix-2c827",
  storageBucket: "netflix-2c827.appspot.com",
  messagingSenderId: "169413050747",
  appId: "1:169413050747:web:e56c2e11e0f3c83108bdde",
  measurementId: "G-81MMCG50F8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()