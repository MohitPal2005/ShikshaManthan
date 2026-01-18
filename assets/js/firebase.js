// assets/js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBZcpFWD5BCT2IHSaXvjx2ObIB2N4yzIOU",
  authDomain: "shikshamanthan-23b7d.firebaseapp.com",
  projectId: "shikshamanthan-23b7d",
  storageBucket: "shikshamanthan-23b7d.appspot.com",
  messagingSenderId: "77392842004",
  appId: "1:77392842004:web:d796a64d685836dc1fc601"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);

export { auth };
