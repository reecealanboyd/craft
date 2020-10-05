import firebase from "firebase";
import React from "react";
import firebaseConfig from "./firebaseConfig";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const globalContext = React.createContext(
  { auth: firebase.auth() } // default value
);
