import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB87FaJLBjFWcpplz8jOY4vNLevJLxiyQs",
  authDomain: "whats-app-clone-d37fa.firebaseapp.com",
  projectId: "whats-app-clone-d37fa",
  storageBucket: "whats-app-clone-d37fa.appspot.com",
  messagingSenderId: "509390066244",
  appId: "1:509390066244:web:80e1a9add2720d96de2211",
  measurementId: "G-Z7MT6F6EG5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;