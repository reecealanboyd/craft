import * as React from "react";
import SignInWithGoogleButton from "./SignInWithGoogleButton";
import LogOutButton from "./LogOutButton";
import ToggleLightDarkModeButton from "./ToggleLightDarkModeButton";
import logo from "../logo.svg";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <SignInWithGoogleButton />
      <LogOutButton />
      <ToggleLightDarkModeButton />
    </header>
  );
};

export default Header;
