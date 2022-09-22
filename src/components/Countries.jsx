import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CountriesContext } from '../context/CountriesContext';
import CountryCard from './CountryCard';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './Navbar';
import { ThemeContext } from '../context/ThemeContext';

const Countries = () => {
  const { countries } = useContext(CountriesContext);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(countries);
  }, [countries]);

  return (
    <div className="main">
      <Navbar />
      <div className="countries">
        {
          countries?.length > 0 ? (
            countries?.map(country => <Link style={{textDecoration: 'none', flexBasis: '24rem', flexGrow: '1'}} to={`/countrydetail/${country.name.common}`}> <CountryCard country={country} key={uuidv4()}/> </Link>)
          ): (<h1 style={{color: theme.text}}>No countries to Show...</h1>)
        }
      </div>
      
    </div>
  )
}

export default Countries