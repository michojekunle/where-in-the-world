import React, { createContext, useState } from 'react'

export const CountriesContext = createContext();

const CountriesContextProvider = ({children}) => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);

    const BASE_URL = 'https://restcountries.com/v3.1'

  const getCountries = (params) => {
    setCountries([]);
    setLoading(true);
    fetch(`${BASE_URL}/${params}`)
    .then(res => res.json())
    .then(data => {
      if (data.status !== 404) {
        setCountries(data);
        setLoading(false);
        console.log(data);
        console.log(countries);
      }
    })
  }
    
  
  return (
    <CountriesContext.Provider value={{countries, loading, getCountries}}>
        {children}
    </CountriesContext.Provider>
  )
}

export default CountriesContextProvider