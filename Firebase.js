// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBqsy8q30k1Up2UyZizRcRoFtp1wifosyc",
  authDomain: "clone-8c263.firebaseapp.com",
  projectId: "clone-8c263",
  storageBucket: "clone-8c263.appspot.com",
  messagingSenderId: "856898450887",
  appId: "1:856898450887:web:1f307db65163b5902f55e2",
  measurementId: "G-TMQYRRDNBD",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
