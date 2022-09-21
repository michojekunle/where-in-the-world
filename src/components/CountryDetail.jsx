import React from 'react';
import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CountriesContext } from '../context/CountriesContext';

const CountryDetail = () => {
  const{ countries } = useContext(CountriesContext);
  const { commonName } = useParams();

  const { flags: { png }, name: { official }, population, region, capital } = countries.find(country => country.name.common === commonName)
  return (
    <div className='country-detail'>
      <button><Link to='/'><i className="fas fa-arrow-left"></i>Back</Link></button>
      <div className="flag">
        <img src={""} alt="" />
      </div>
    </div>
  )
}

export default CountryDetail
