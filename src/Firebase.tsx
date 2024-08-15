// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-qbTVpCIyv-5cSE5URoAAIM1ioMgI88s",
    authDomain: "portfolio-292f1.firebaseapp.com",
    projectId: "portfolio-292f1",
    storageBucket: "portfolio-292f1.appspot.com",
    messagingSenderId: "283897841044",
    appId: "1:283897841044:web:6529b2bbd04110f5b93b81",
    measurementId: "G-MDFN77VQ8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);