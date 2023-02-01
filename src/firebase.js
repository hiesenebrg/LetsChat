import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTyfgJS6Kq4CeFMVfTyBl82Wc0tyzOiEM",
  authDomain: "letschat-223c6.firebaseapp.com",
  projectId: "letschat-223c6",
  storageBucket: "letschat-223c6.appspot.com",
  messagingSenderId: "695321366389",
  appId: "1:695321366389:web:f2395c6f211c08571c4d3c"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
