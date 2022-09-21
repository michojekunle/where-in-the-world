import React from 'react';
import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CountriesContext } from '../context/CountriesContext';

const CountryDetail = () => {
  const{ countries } = useContext(CountriesContext);
  const { commonName } = useParams();

  const countryDet = countries.find(country => country.name.common === commonName);
  console.log(countryDet);
  const { flags: { png }, name: { official }, population, region, capital } = countryDet; 
  const nativeNames  = Object.keys(countryDet.name.nativeName);
  const nativeName = countryDet.name.nativeName[nativeNames[nativeNames.length-1]].common;
  return (
    <div className='country-detail'>
      <button><Link to='/'><i className="fas fa-arrow-left"></i>Back</Link></button>
      <div className="flag">
        <img src={png} alt="" />
      </div>
      <div className="about-country">
        <h1>{official}</h1>
        
      </div>
    </div>
  )
}

export default CountryDetail
