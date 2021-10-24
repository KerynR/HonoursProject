import {initializeApp}  from "firebase/app";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA1YqaYi1JEQzbA-M4-aswuHj_br5woZMI",
    authDomain: "honoursproject671.firebaseapp.com",
    projectId: "honoursproject671",
    storageBucket: "honoursproject671.appspot.com",
    messagingSenderId: "112659521113",
    appId: "1:112659521113:web:1c20f50dbfd534cc7fdb48"
  };
  
  // Initialize Firebase
  const firebase = initializeApp(firebaseConfig);
  const auth = getAuth(firebase)
  export {firebase, auth}