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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user ', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config); 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;