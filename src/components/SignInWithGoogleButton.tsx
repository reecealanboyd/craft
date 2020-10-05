import firebase from "firebase";
import * as React from "react";

interface ISignInWithGoogleButtonProps {}

const SignInWithGoogleButton: React.FunctionComponent<ISignInWithGoogleButtonProps> = (
  props
) => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };
  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
};

export default SignInWithGoogleButton;
