import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyA0qbIxUyMGs2kgUntI-TVWWAn-OB7Vzx0",
    authDomain: "sprint3-block-buster.firebaseapp.com",
    projectId: "sprint3-block-buster",
    storageBucket: "sprint3-block-buster.appspot.com",
    messagingSenderId: "43426689307",
    appId: "1:43426689307:web:5203429f704364e68ca3be"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
/* console.log(db);
console.log(googleAuthProvider); */


export {
    db,
    googleAuthProvider,
    firebase
}