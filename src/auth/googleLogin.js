import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const googleLogin = async () => {
  try {
    return await signInWithPopup(auth, provider);
  } catch (e) {
    return await signInWithRedirect(auth, provider);
  }
};
