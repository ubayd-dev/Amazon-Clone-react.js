import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpInWxX12N_B5i0zwVuOo92iX7joBT7kE",
  authDomain: "zaio--clone-c044b.firebaseapp.com",
  projectId: "zaio--clone-c044b",
  storageBucket: "zaio--clone-c044b.firebasestorage.app",
  messagingSenderId: "486973632404",
  appId: "1:486973632404:web:e26e718aa2980526a72981",
  measurementId: "G-97X2DR1VEL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
