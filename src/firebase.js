// import * as firebase from "firebaseapp";
// import 'firebase/firestore';
// import 'firebase/compat/auth';


// const Config = {
//   apiKey: "AIzaSyA4HqD5rTTUczmkx5JmbswI_e5XhEu1kN8",
//   authDomain: "aldi-online.firebaseapp.com",
//   projectId: "aldi-online",
//   storageBucket: "aldi-online.appspot.com",
//   messagingSenderId: "78189868250",
//   appId: "1:78189868250:web:d44cb47e60b0adb5e6a1e3",
//   measurementId: "G-Y1JFK16N2M"
// };

// // Initialize Firebase
// const fb = firebase.initializeApp(Config);

// const db = firebase.firestore;
// const auth = firebase.auth();

// export{fb,db,auth}

import * as firebase from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import '@firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA4HqD5rTTUczmkx5JmbswI_e5XhEu1kN8",
  authDomain: "aldi-online.firebaseapp.com",
  projectId: "aldi-online",
  storageBucket: "aldi-online.appspot.com",
  messagingSenderId: "78189868250",
  appId: "1:78189868250:web:d44cb47e60b0adb5e6a1e3",
  measurementId: "G-Y1JFK16N2M"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {app,db,analytics,auth}
