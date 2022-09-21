import React, { createContext, useState } from 'react'

export const CountriesContext = createContext();

const CountriesContextProvider = ({children}) => {
    const [countries, setCountries] = useState([]);

    const BASE_URL = 'https://restcountries.com/v3.1'

  const getCountries = (params) => {
    fetch(`${BASE_URL}/${params}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setCountries(data);
    })
  }
    
  
  return (
    <CountriesContext.Provider value={{countries, getCountries}}>
        {children}
    </CountriesContext.Provider>
  )
}

export default CountriesContextProvider