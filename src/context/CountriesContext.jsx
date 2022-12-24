import React, { createContext, useState } from 'react'

export const CountriesContext = createContext();

const CountriesContextProvider = ({children}) => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [random, setRandom] = useState(0)
    const getRandom = () => Math.ceil(Math.random() * 5)

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
        setRandom(getRandom)
      }else {
        setLoading(false);
      }
    })
  }
  

  return (
    <CountriesContext.Provider value={{countries, loading, random, getCountries}}>
        {children}
    </CountriesContext.Provider>
  )
}

export default CountriesContextProvider
