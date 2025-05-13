// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

console.log('inside firebase config',import.meta.env.VITE_PASS)

const firebaseConfig = {
  apiKey: import.meta.env.VITe_apiKey,
  authDomain: import.meta.env.VITe_authDomain ,
  projectId: import.meta.env.VITe_projectId  ,
  storageBucket:import.meta.env.VITe_storageBucket  ,
  messagingSenderId:import.meta.env.VITe_messagingSenderId  ,
  appId:import.meta.env.VITe_appId   ,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;