import React, { createContext, useState } from 'react'

export const CountriesContext = createContext();

const CountriesContextProvider = ({children}) => {
    const [countries, setCountries] = useState([]);

  return (
    <CountriesContext.Provider value={{countries, setCountries}}>
        {children}
    </CountriesContext.Provider>
  )
}

export default CountriesContextProvider