// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaal8PiIna_V5poYoKQ1fNmYfIJ78Dcwc",
  authDomain: "tasnim-shahriar-akash.firebaseapp.com",
  projectId: "tasnim-shahriar-akash",
  storageBucket: "tasnim-shahriar-akash.appspot.com",
  messagingSenderId: "936702666297",
  appId: "1:936702666297:web:4871d8f8fc89124db54fe8",
  measurementId: "G-VCT0MEB9QQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const firestore=getFirestore(app)
export {app,auth,firestore}
