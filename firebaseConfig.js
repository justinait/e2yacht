// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLFv6AfPSxtHxeyOfHYxTxPPhgvim2Ppk",
  authDomain: "e2yachtservices.firebaseapp.com",
  projectId: "e2yachtservices",
  storageBucket: "e2yachtservices.appspot.com",
  messagingSenderId: "813985311832",
  appId: "1:813985311832:web:4beb9f16ee4f4f9b6f6e2d",
  measurementId: "G-NLCYRJ21GL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
export default db;