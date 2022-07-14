// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrd-85fjDDdqlXprbW66bisWYpaZg__qQ",
  authDomain: "vbis-test.firebaseapp.com",
  databaseURL: "https://vbis-test-default-rtdb.firebaseio.com",
  projectId: "vbis-test",
  storageBucket: "vbis-test.appspot.com",
  messagingSenderId: "182529087235",
  appId: "1:182529087235:web:f7d35def84014c6a2cfb36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const auth = getAuth(app);

auth.setCustomUserClaims(uid, {client: true});

export default { db };