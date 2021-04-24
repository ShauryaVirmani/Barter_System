import firebase from 'firebase';
require('@firebase/firestore')

 const firebaseConfig = {
    apiKey: "AIzaSyAgK8NbO6Kcy5wyvcuKtB48sveCQphKi1w",
    authDomain: "bartersystem-1de44.firebaseapp.com",
    projectId: "bartersystem-1de44",
    storageBucket: "bartersystem-1de44.appspot.com",
    messagingSenderId: "113163911483",
    appId: "1:113163911483:web:dc46232388bba5d0f3b71e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebaseConfig;