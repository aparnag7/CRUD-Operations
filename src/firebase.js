import firebase from "firebase/app";
import "firebase/database";

<script src="https://www.gstatic.com/firebasejs/8.9.0/firebase-app.js"></script>  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref()
