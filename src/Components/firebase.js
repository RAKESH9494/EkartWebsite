import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBFl0ApFMrVxwZwFKKIx4rorPJ_fNkZRaQ",
  authDomain: "ecartapp-1a4b0.firebaseapp.com",
  databaseURL: "https://ecartapp-1a4b0-default-rtdb.firebaseio.com",
  projectId: "ecartapp-1a4b0",
  storageBucket: "ecartapp-1a4b0.appspot.com",
  messagingSenderId: "1073973884479",
  appId: "1:1073973884479:web:ace7622f0a6b9114e06a8a",
  measurementId: "G-LNQ5VLMWH6"
};

// Initialize Firebase
var firebaseDB = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export {auth}
export {db}
export default firebaseDB.database().ref();
