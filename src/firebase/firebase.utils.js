import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBibxyri9vHXevQpDMnOYfAsMB8eL8bwhk",
    authDomain: "crwn-db-4aac5.firebaseapp.com",
    projectId: "crwn-db-4aac5",
    storageBucket: "crwn-db-4aac5.appspot.com",
    messagingSenderId: "96906210828",
    appId: "1:96906210828:web:31ff70afaca649fb5dc829"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;