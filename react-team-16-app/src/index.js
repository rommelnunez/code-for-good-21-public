import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6nqb2tRWs6Pj_LXW9-rogTl5dZMk6vE8",
  authDomain: "glsen-code-for-good.firebaseapp.com",
  projectId: "glsen-code-for-good",
  storageBucket: "glsen-code-for-good.appspot.com",
  messagingSenderId: "589349369467",
  appId: "1:589349369467:web:c6ac0c6c6024c8064bd4de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


