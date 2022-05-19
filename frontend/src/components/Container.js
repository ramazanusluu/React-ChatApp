import React from "react";
import { useTheme } from "../context/ThemeContext";
import Theme from "./Theme";

function Container() {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme === "dark" ? theme : "light"}`}>
      <Theme />
    </div>
  );
}

export default Container;
