// ~/plugins/firebase.js

import firebase from 'firebase'

let app = null;

const firebaseConfig = {
    apiKey: "AIzaSyD6twNQ5Ayu-am_zFDvtlJP2ZMUzneeOso",
    authDomain: "ideeza-a05dc.firebaseapp.com",
    databaseURL: "https://ideeza-a05dc.firebaseio.com",
    projectId: "ideeza-a05dc",
    storageBucket: "ideeza-a05dc.appspot.com",
    messagingSenderId: "333604276207",
    appId: "1:333604276207:web:65f4c9e282753e7c4ad81a",
    measurementId: "G-3L34C42B4T"
};
// Initialize Firebase
app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig)

export const db = app.database()