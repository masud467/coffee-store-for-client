// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnvp2ODwGBvYjix2HyHRSNiS0nOSn9Mc4",
  authDomain: "coffee-store-eb32c.firebaseapp.com",
  projectId: "coffee-store-eb32c",
  storageBucket: "coffee-store-eb32c.appspot.com",
  messagingSenderId: "719476683636",
  appId: "1:719476683636:web:f66f53ec59c3e25b3fb221"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app