// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjf2sUJ51XpLHHXsKt3lrfxE0Gv5hrsr0",
    authDomain: "realtor-clone-react-cc0de.firebaseapp.com",
    projectId: "realtor-clone-react-cc0de",
    storageBucket: "realtor-clone-react-cc0de.appspot.com",
    messagingSenderId: "248043343106",
    appId: "1:248043343106:web:bfd8e78389ac0307cc061b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()