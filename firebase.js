// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
//import firestore from '@react-native-firebase/firestore';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlrOExHXcbtfHOTBYKKFYdpvXdbfzxDZw",
  authDomain: "aidkit-199e5.firebaseapp.com",
  projectId: "aidkit-199e5",
  storageBucket: "aidkit-199e5.appspot.com",
  messagingSenderId: "572683497538",
  appId: "1:572683497538:web:dc35c7bc8df873b3f0fddb"
};

// Initialize Firebase
let app;
if (firebase.apps.length == 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const auth = firebase.auth()


export { auth };