import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CountriesContext } from '../context/CountriesContext';
import CountryCard from './CountryCard';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './Navbar';

const Countries = () => {
  const { countries } = useContext(CountriesContext);

  useEffect(() => {
    console.log(countries);
  }, [countries]);

  return (
    <div className="main">
      <Navbar />
      <div className="countries">
        {
          countries ? (
            countries?.map(country => <Link style={{textDecoration: 'none', flexBasis: '24rem', flexGrow: '1'}} to={`/countrydetail/${country.name.common}`}> <CountryCard country={country} key={uuidv4()}/> </Link>)
          ): <h2>Loading...</h2>
        }
      </div>
      
    </div>
  )
}

export default Countries