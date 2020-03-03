import { firebase } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAp2y96Rjn-0ByroVe8DMTRSVe3Km2AK6w",
  authDomain: "ghub-df94b.firebaseapp.com",
  databaseURL: "https://ghub-df94b.firebaseio.com",
  projectId: "ghub-df94b",
  storageBucket: "ghub-df94b.appspot.com",
  messagingSenderId: "782999207925",
  appId: "1:782999207925:web:c94e475f8666f7686d6abc",
  measurementId: "G-109F6XY6CB"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default FirebaseKeys
