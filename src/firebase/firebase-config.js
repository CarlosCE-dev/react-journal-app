import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBL735EL-PIrgz50JpKi4phlqjCbz4AKVU",
    authDomain: "react-app-curso-7f42d.firebaseapp.com",
    databaseURL: "https://react-app-curso-7f42d.firebaseio.com",
    projectId: "react-app-curso-7f42d",
    storageBucket: "react-app-curso-7f42d.appspot.com",
    messagingSenderId: "746285996078",
    appId: "1:746285996078:web:360ec2c316bde24a7567bf"
};

firebase.initializeApp( firebaseConfig );

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}