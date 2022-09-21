import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header role={"menubar"} style={{backgroundColor: theme.bg}}>
      <h1 style={{color: theme.text}}>Where in the world?</h1>
      <button style={{color: theme.text}} onClick={toggleTheme} type='button'>
        <i className="fas fa-moon"></i>
        Dark Mode
      </button>
    </header>
  )
}

export default Header
