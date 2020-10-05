import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SignInWithGoogleButton from "./components/SignInWithGoogleButton";
import LogOutButton from "./components/LogOutButton";
import ToggleLightDarkModeButton from "./components/ToggleLightDarkModeButton";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
