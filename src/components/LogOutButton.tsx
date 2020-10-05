import { auth } from "firebase";
import * as React from "react";
import { useContext } from "react";
import { globalContext } from "../globalContext";

interface ILogOutButtonProps {}

const LogOutButton: React.FunctionComponent<ILogOutButtonProps> = (props) => {
  const { auth } = useContext(globalContext);
  const logOut = () => {
    auth.signOut();
  };
  return <button onClick={logOut}>Log out</button>;
};

export default LogOutButton;
