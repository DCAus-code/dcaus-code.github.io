// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoq0OzHUOcMC91nF7R1wpIF6WrUvqPFcM",
  authDomain: "lostinfinite-e4049.firebaseapp.com",
  projectId: "lostinfinite-e4049",
  storageBucket: "lostinfinite-e4049.appspot.com",
  messagingSenderId: "460501640057",
  appId: "1:460501640057:web:2fae3363491105eb00c5a8",
  measurementId: "G-VGRSJ1MK6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
