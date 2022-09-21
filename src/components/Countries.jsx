import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CountriesContext } from '../context/CountriesContext';
import CountryCard from './CountryCard';
import { v4 as uuidv4 } from 'uuid';

const Countries = () => {
  const { countries } = useContext(CountriesContext);
  
  return (
    <div className="countries">
      <CountryCard />
      {/* <CountryCard country={country} key={uuidv4()}/> */}
    </div>
  )
}

export default Countries