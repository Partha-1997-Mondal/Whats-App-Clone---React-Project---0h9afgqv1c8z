// import * as firebase from "firebase/app";
import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCLVwdl8kia2dDPql6dOb2XAe1subllcAc",
    authDomain: "whats-app-clone-73e73.firebaseapp.com",
    projectId: "whats-app-clone-73e73",
    storageBucket: "whats-app-clone-73e73.appspot.com",
    messagingSenderId: "798757524420",
    appId: "1:798757524420:web:1f6469aa5c38239dbfca91",
    measurementId: "G-R4CNRQ0WS5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
//  to store the dta
  const db = firebaseApp.firestore();
  // fire base authantication
  const auth = firebase.auth();
  // for google authantication
  const provider = new firebase.auth.googleAuthProvider();


export { auth, provider};
export default db;