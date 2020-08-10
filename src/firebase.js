import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCIiOB4iu1n4Bk-YGRUOfnIUSU2EEhgwwE",
    authDomain: "messenger-clone-b928b.firebaseapp.com",
    databaseURL: "https://messenger-clone-b928b.firebaseio.com",
    projectId: "messenger-clone-b928b",
    storageBucket: "messenger-clone-b928b.appspot.com",
    messagingSenderId: "38066853186",
    appId: "1:38066853186:web:e1c405255755ae92ada4db",
    measurementId: "G-GHTJ5MD79Q"
});

const db = firebaseApp.firestore();

export default db;