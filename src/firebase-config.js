import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXkkc0tG-cdIQBcCoXbKmTiV-QakTXvNo",
  authDomain: "whatsapp-clone-cdce0.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-cdce0.firebaseio.com",
  projectId: "whatsapp-clone-cdce0",
  storageBucket: "whatsapp-clone-cdce0.appspot.com",
  messagingSenderId: "861840966732",
  appId: "1:861840966732:web:7eb24a232e622a3c51e0e9",
  measurementId: "G-ZXR0VEMHF8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
