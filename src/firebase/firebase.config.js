// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

console.log('inside firebase config',import.meta.env.VITE_PASS)

const firebaseConfig = {
  apiKey: import.meta.env.VITe_apiKey,
  authDomain: import.meta.env.,
  projectId: import.meta.env. ,
  storageBucket:import.meta.env.  ,
  messagingSenderId:import.meta.env.  ,
  appId:   ,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;