// Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5qcpUouqzB4GRh080F48cV0vbLB0zVdY",
  authDomain: "electronit-store-client.firebaseapp.com",
  projectId: "electronit-store-client",
  storageBucket: "electronit-store-client.appspot.com",
  messagingSenderId: "800772211745",
  appId: "1:800772211745:web:a0dc32e4a1bad64b820f60",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ EXPORT AUTH (THIS WAS MISSING)
export const auth = getAuth(app);

export default app;
