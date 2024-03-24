import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHZEbmTZcSnkHRfHM89t_QjIGNDF7l9u8",
  authDomain: "reactfirebase-249c6.firebaseapp.com",
  projectId: "reactfirebase-249c6",
  storageBucket: "reactfirebase-249c6.appspot.com",
  messagingSenderId: "227851027877",
  appId: "1:227851027877:web:591b256423fa7759d0d44c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);