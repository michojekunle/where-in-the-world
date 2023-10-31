import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CountriesContext } from '../context/CountriesContext';
import CountryCard from './CountryCard';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './Navbar';
import { ThemeContext } from '../context/ThemeContext';
import Loading from './Loading';

const Countries = () => {
  const { countries, loading, random, getCountries } = useContext(CountriesContext);
  const { theme } = useContext(ThemeContext);
  const dataAos = [ 'zoom-in-up', 'fade-up-right', 'zoom-in-left', 'fade-up', 'zoom-in-right', 'flip-left' ]

  useEffect(() => {
    getCountries ('all');
    console.log(countries);
  }, []);

  return (
    <div className="main">
      <Navbar />
      {
        loading ? (
          <Loading/>
        ) : (
          <div className="countries">
            {
              countries?.length > 0 ? (
                countries?.map(country => <Link style={{textDecoration: 'none', flexBasis: '33rem'}} key={uuidv4()} to={`/countrydetail/${country.name.common}`}> <CountryCard country={country} dataAos={dataAos[random]} /> </Link>)
              ): (<h1 style={{color: theme.text}}>No Countries Found...</h1>)
            }
          </div>
        )
      }
      <div></div>
    </div>
  )
}

export default Countries
