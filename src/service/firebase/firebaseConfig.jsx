// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxhGsbOcfxuV3ugzYfE4wUvlt-l8_5-pY",
  authDomain: "webreactcoder.firebaseapp.com",
  projectId: "webreactcoder",
  storageBucket: "webreactcoder.appspot.com",
  messagingSenderId: "810858909779",
  appId: "1:810858909779:web:6a164d17d6ebc3df7636a6",
  measurementId: "G-QE2X63MZSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)