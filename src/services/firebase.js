// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgCLQG8qOhRRvspZxsqLLtTRxFukOYS0Y",
  authDomain: "neighborhood-newsfeed.firebaseapp.com",
  databaseURL: "https://neighborhood-newsfeed-default-rtdb.firebaseio.com",
  projectId: "neighborhood-newsfeed",
  storageBucket: "neighborhood-newsfeed.firebasestorage.app",
  messagingSenderId: "565377405716",
  appId: "1:565377405716:web:2065830b0db61ab7fee801",
  measurementId: "G-6TV0K592E6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const database = getDatabase(app);