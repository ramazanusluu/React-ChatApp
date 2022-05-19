import React from "react";
import { useTheme } from "../context/ThemeContext";
import Theme from "./Theme";
import Connect from "./Connect";

function Container() {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme === "dark" ? theme : "light"}`}>
      <Theme />
      <br />
      <Connect />
    </div>
  );
}

export default Container;
