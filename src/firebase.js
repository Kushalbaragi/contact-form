
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API,
    authDomain: "contactform-2a3ef.firebaseapp.com",
    databaseURL: "https://contactform-2a3ef-default-rtdb.firebaseio.com",
    projectId: "contactform-2a3ef",
    storageBucket: "contactform-2a3ef.appspot.com",
    messagingSenderId: "775001205742",
    appId: "1:775001205742:web:b2941db952522d69b57cff"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const db=getFirestore(app);