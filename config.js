import { firebase } from "firebase";

export default FirebaseKeys = {
        apiKey: "AIzaSyCEKfr8jeuPL4cmcCMbLYsVRq5tUjjMuk0",
        authDomain: "grace-hub.firebaseapp.com",
        databaseURL: "https://grace-hub.firebaseio.com",
        projectId: "grace-hub",
        storageBucket: "grace-hub.appspot.com",
        messagingSenderId: "190767686892",
        appId: "1:190767686892:web:1313e2c194a11c349271c9",
        measurementId: "G-2YVP3JHMKZ"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
