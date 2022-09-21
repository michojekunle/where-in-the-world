import React, { createContext, useState} from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    const light = { bg: 'hsl(0, 0%, 98%)', elements: 'hsl(0, 0%, 100%)', text: 'hsl(200, 15%, 8%)' };
    const dark = { bg: 'hsl(207, 26%, 17%)', elements: 'hsl(209, 23%, 22%)', text: 'hsl(0, 0%, 100%)' };

    const [isLightTheme, setIsLightTheme] = useState(true);
    const theme =  isLightTheme ? light : dark;
    

    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme);
    }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
