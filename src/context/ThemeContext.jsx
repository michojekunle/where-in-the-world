import React, { createContext, useState} from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    const light = { bg: '', elements: '', text: '' };
    const dark = { bg: '', elements: '', text: '' };

    const [isLightTheme, setIsLightTheme] = useState(true);
    const theme =  isLightTheme ? light : dark;
    

    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme);
    }

  return (
    <ThemeContext.Provider value={{theme, setIsLightTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
