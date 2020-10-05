import firebase from "firebase";
import React from "react";
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

export const GlobalContext = React.createContext({ auth: firebase.auth() });
