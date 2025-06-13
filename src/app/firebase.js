// Import necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFCIFKqsbWgxKTDJ8e5QkK0ZlznwBW4Ws",
  authDomain: "mychal-wood-portfolio.firebaseapp.com",
  projectId: "mychal-wood-portfolio",
  storageBucket: "mychal-wood-portfolio.firebasestorage.app",
  messagingSenderId: "647399827878",
  appId: "1:647399827878:web:0dadb53e7ef4107634c767",
  measurementId: "G-6TJHEGT3YZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
