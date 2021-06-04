import firebase from 'firebase'


const config = {
    apiKey: "AIzaSyD0GoP3V6QHIJdeyg0GzItty5v8PL9uHA4",
    authDomain: "insta-clone-5b0c1.firebaseapp.com",
    databaseURL: "https://insta-clone-5b0c1-default-rtdb.firebaseio.com",
    projectId: "insta-clone-5b0c1",
    storageBucket: "insta-clone-5b0c1.appspot.com",
    messagingSenderId: "417076599669",
    appId: "1:417076599669:web:4800851db8549c9c50d13c"
  };

  const firebaseApp = firebase.initializeApp(config);
  const { FieldValue } = firebase.firestore;
  
  export { firebaseApp, FieldValue };