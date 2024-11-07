// Import the required functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const config = {
  apiKey: "AIzaSyAbAw5_wf_Gq2tPEIL6OJIDT3zeW-ELCpc",
  authDomain: "crown-clothing-c1119.firebaseapp.com",
  projectId: "crown-clothing-c1119",
  storageBucket: "crown-clothing-c1119.firebasestorage.app",
  messagingSenderId: "97351956645",
  appId: "1:97351956645:web:0ccfd1d56cdc58e19d354c",
  measurementId: "G-QYKSD43C3W"
};

// Initialize Firebase
const app = initializeApp(config);

// Initialize services
export const auth = getAuth(app);
export const firestore = getFirestore(app);

// Set up Google auth provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

// Export the app instance if needed
export default app;
