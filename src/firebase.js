import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBrL3hpsedHwk5i2wfVAlo1NiB2g5y0REk",
  authDomain: "what-s-app-clone-8e182.firebaseapp.com",
  databaseURL: "https://what-s-app-clone-8e182.firebaseio.com",
  projectId: "what-s-app-clone-8e182",
  storageBucket: "what-s-app-clone-8e182.appspot.com",
  messagingSenderId: "36888280208",
  appId: "1:36888280208:web:8f08a8bc2ce9923a646c15",
  measurementId: "G-71Y2MXY9P7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
