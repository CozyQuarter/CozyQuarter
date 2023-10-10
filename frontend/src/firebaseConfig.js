// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOKVA9PcQdeyxog_CQWP_vfkpQBtXu8H0",
  authDomain: "cozyquarter-31323.firebaseapp.com",
  projectId: "cozyquarter-31323",
  storageBucket: "cozyquarter-31323.appspot.com",
  messagingSenderId: "912655037299",
  appId: "1:912655037299:web:69488528b288ca0cf84b06",
  measurementId: "G-R9WF2EMSEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const analytics = getAnalytics(app);

// Exporting auth, database, and analytics individually
export { auth, database, analytics, firebaseConfig as default };