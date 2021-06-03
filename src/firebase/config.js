import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCkpJcU0w4VC5l1mdYM60WgQjYBa-Uh36A",
    authDomain: "sprint3-block-master.firebaseapp.com",
    projectId: "sprint3-block-master",
    storageBucket: "sprint3-block-master.appspot.com",
    messagingSenderId: "336906434527",
    appId: "1:336906434527:web:fa6178c193cf13504fb66a"
};

//inicializamos firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
console.log(googleAuthProvider);


export {
    db,
    googleAuthProvider,
    firebase
}