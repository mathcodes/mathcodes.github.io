import React, { useContext } from "react"
import { Button } from "react-bootstrap"
import ThemeContext from "../contexts/ThemeContext"
import gh from '../assets/svg/social/github.svg';
import li from '../assets/svg/social/linkedin.svg';

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="button-theme"
    >
      <img
        src={theme === "dark" ? {gh} : {li}}
        className="theme-icon"
        alt="theme"
      />
    </Button>
  )
}

export default ThemeSwitcher