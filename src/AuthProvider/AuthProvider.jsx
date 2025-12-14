import { createContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { googleLogin } from "../auth/googleLogin";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const SignIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const googleSignIn = () => googleLogin();

  const logOut = () => signOut(auth);

  return (
    <AuthContext.Provider
      value={{ user, loading, SignIn, createUser, googleSignIn, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
