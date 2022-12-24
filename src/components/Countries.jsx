import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CountriesContext } from '../context/CountriesContext';
import CountryCard from './CountryCard';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './Navbar';
import { ThemeContext } from '../context/ThemeContext';
import Loading from './Loading';

const Countries = () => {
  const { countries, loading, random } = useContext(CountriesContext);
  const { theme } = useContext(ThemeContext);
  const dataAos = [ 'slide-up', 'fade', 'fade-up', 'slide-right', 'slide-left' ]

  useEffect(() => {
    console.log(countries);
  }, [countries]);

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
                countries?.map(country => <Link style={{textDecoration: 'none', flexBasis: '33rem'}} to={`/countrydetail/${country.name.common}`}> <CountryCard country={country} dataAos={dataAos[random]} key={uuidv4()}/> </Link>)
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