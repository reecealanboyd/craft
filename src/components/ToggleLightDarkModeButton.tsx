import * as React from "react";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

interface IToggleLightDarkModeButtonProps {}

const ToggleLightDarkModeButton: React.FunctionComponent<IToggleLightDarkModeButtonProps> = (
  props
) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);
  return <button onClick={toggleTheme}>Toggle theme</button>;
};

export default ToggleLightDarkModeButton;
