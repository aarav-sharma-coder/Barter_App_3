import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyD7AjweU0TeZVvzlN7vqNCj0JwsNLuMzuY",
  authDomain: "barter-app-efe78.firebaseapp.com",
  databaseURL: "https://barter-app-efe78.firebaseio.com",
  projectId: "barter-app-efe78",
  storageBucket: "barter-app-efe78.appspot.com",
  messagingSenderId: "916668887749",
  appId: "1:916668887749:web:96edbc919a707d389636ac"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
