import firebase from "firebase/app";
import "firebase/database";

<script src="https://www.gstatic.com/firebasejs/8.9.0/firebase-app.js"></script>  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCJtawZg_HBK749DhJQH6R4VsJZtUv-AHo",
    authDomain: "reactcrud-505be.firebaseapp.com",
    databaseURL: "https://reactcrud-505be-default-rtdb.firebaseio.com",
    projectId: "reactcrud-505be",
    storageBucket: "reactcrud-505be.appspot.com",
    messagingSenderId: "384076428775",
    appId: "1:384076428775:web:adb94d58667c064845b942"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref()