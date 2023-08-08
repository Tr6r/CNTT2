const firebase = require('firebase')
const firebaseConfig = {
  apiKey: "AIzaSyD5w0_TzvUyx299Gio3iEdHINhu3rDl8EQ",
  authDomain: "temperature-and-humidity-1d01e.firebaseapp.com",
  databaseURL: "https://temperature-and-humidity-1d01e-default-rtdb.firebaseio.com",
  projectId: "temperature-and-humidity-1d01e",
  storageBucket: "temperature-and-humidity-1d01e.appspot.com",
  messagingSenderId: "861539368789",
  appId: "1:861539368789:web:4c24c181c5c6aec3f239dc",
  measurementId: "G-2RK2ZBVSLH"
};
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
const User = db.collection("House");
module.exports = User;