import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCncxZfSG_x6JFD15qQ8JmBL1YQDvZ7VpE",
  authDomain: "crwon-db.firebaseapp.com",
  databaseURL: "https://crwon-db.firebaseio.com",
  projectId: "crwon-db",
  storageBucket: "crwon-db.appspot.com",
  messagingSenderId: "927865281894",
  appId: "1:927865281894:web:11c856a592d2cdba257ca7",
  measurementId: "G-X4QYWQD624"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
if(!userAuth) return;

const userRef = firestore.doc(`users/${userAuth.uid}`);
const snapShot = await userRef.get();
if(!snapShot.exists){
  const {displayName, email} = userAuth;
  const createdAt = new Date();

  try {
    await userRef.set({
      displayName,
      email, 
      createdAt,
      ...additionalData
    })

    } catch(error){
    console.log('error creating user', error.message);

    }
  }
  return userRef;
};



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



