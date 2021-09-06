import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC-NLmnvx77EXOFKhnvkE5mO_ualuFKB10",
    authDomain: "attendance-cb9c4.firebaseapp.com",
    projectId: "attendance-cb9c4",
    storageBucket: "attendance-cb9c4.appspot.com",
    messagingSenderId: "179260574410",
    appId: "1:179260574410:web:e227b71d2e806f431e0233",
    measurementId: "G-5958TXCRWM"
});
const fire = firebaseApp;
// const db = firebase.firestore();
// const auth = firebase.auth();
export default  fire ;