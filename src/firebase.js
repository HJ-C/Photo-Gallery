import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBes5B_s4zqaJyhHPscGJK00Qyf0Hs8kds",
  authDomain: "photo-533ec.firebaseapp.com",
  projectId: "photo-533ec",
  storageBucket: "photo-533ec.appspot.com",
  messagingSenderId: "832126528540",
  appId: "1:832126528540:web:736941b180e9570c5743d9",
  measurementId: "G-3Q3QF1G7BR"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };