// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5qcpUouqzB4GRh080F48cV0vbLB0zVdY",
  authDomain: "electronit-store-client.firebaseapp.com",
  projectId: "electronit-store-client",
  storageBucket: "electronit-store-client.appspot.com",
  messagingSenderId: "800772211745",
  appId: "1:800772211745:web:a0dc32e4a1bad64b820f60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;