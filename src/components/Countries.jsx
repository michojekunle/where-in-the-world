import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CountriesContext } from '../context/CountriesContext';
import CountryCard from './CountryCard';
import { v4 as uuidv4 } from 'uuid';

const Countries = () => {
  const { countries } = useContext(CountriesContext);

  useEffect(() => {
  console.log(countries);
  }, [countries]);

  return (
    <div className="countries">
      {
        countries?.map(country => <CountryCard country={country} key={uuidv4()}/>)
      }
      
    </div>
  )
}

export default Countries