import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCcPKJluMhPx-6-eqpray5dGxD5qem5YD8",
    authDomain: "newsmeds.firebaseapp.com",
    projectId: "newsmeds",
    storageBucket: "newsmeds.appspot.com",
    messagingSenderId: "929816590751",
    appId: "1:929816590751:web:6d0cbae6b31a3334d525aa"
  };
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;