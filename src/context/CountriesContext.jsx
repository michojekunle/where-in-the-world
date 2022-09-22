import React, { createContext, useState } from 'react'

export const CountriesContext = createContext();

const CountriesContextProvider = ({children}) => {
    const [countries, setCountries] = useState([]);

    const BASE_URL = 'https://restcountries.com/v3.1'

  const getCountries = (params) => {
    setCountries([]);
    fetch(`${BASE_URL}/${params}`)
    .then(res => res.json())
    .then(data => {
      if (data.status !== 404) {
        setCountries(data);
        console.log(data);
        console.log(countries);
      }
    })
  }
    
  
  return (
    <CountriesContext.Provider value={{countries, getCountries}}>
        {children}
    </CountriesContext.Provider>
  )
}

export default CountriesContextProvider