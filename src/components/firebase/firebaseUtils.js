import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyAbAw5_wf_Gq2tPEIL6OJIDT3zeW-ELCpc",
  authDomain: "crown-clothing-c1119.firebaseapp.com",
  projectId: "crown-clothing-c1119",
  storageBucket: "crown-clothing-c1119.firebasestorage.app",
  messagingSenderId: "97351956645",
  appId: "1:97351956645:web:0ccfd1d56cdc58e19d354c",
  measurementId: "G-QYKSD43C3W",
};

const app = initializeApp(config);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userDocRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userDocRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
      console.log("User created in Firestore");
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userDocRef;
};

export const signUpWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default app;
