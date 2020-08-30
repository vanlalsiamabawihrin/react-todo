
  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDU5k_2qw37BiIszmElxLk9jjR_UDKXdPE",
        authDomain: "todo-app-f5df0.firebaseapp.com",
        databaseURL: "https://todo-app-f5df0.firebaseio.com",
        projectId: "todo-app-f5df0",
        storageBucket: "todo-app-f5df0.appspot.com",
        messagingSenderId: "94343150273",
        appId: "1:94343150273:web:460ce46c6772314c277240",
        measurementId: "G-76KVN74DDH"

  });

  const db = firebaseApp.firestore();
  export default db;
