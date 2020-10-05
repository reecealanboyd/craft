import * as React from "react";
import firebase from "firebase";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

interface ISignInWithGoogleButtonProps {}

const SignInWithGoogleButton: React.FunctionComponent<ISignInWithGoogleButtonProps> = (
  props
) => {
  const { auth } = useContext(GlobalContext);
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
};

export default SignInWithGoogleButton;
