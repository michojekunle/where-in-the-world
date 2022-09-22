import React from 'react';
import { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CountriesContext } from '../context/CountriesContext';

const CountryDetail = () => {
  const{ countries } = useContext(CountriesContext);
  const { commonName } = useParams();
  
  const countryDet = countries.find(country => country.name.common === commonName);
  const { flags: { png }, name: { official }, population, region, capital, subregion, tld, languages, currencies } = countryDet; 
  const nativeNames  = Object.keys(countryDet.name.nativeName);
  const nativeName = countryDet.name.nativeName[nativeNames[nativeNames.length-1]].common;
  const language = Object.values(languages);
  const currency = Object.values(currencies);

  useEffect(() => { 
    alert(nativeName);
  }, [nativeName])

  return (
    <div className='country-detail' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
      <button><Link to='/'><i className="fas fa-arrow-left"></i>Back</Link></button>
      <div className="" style={{display: 'flex'}}>
        <div className="flag">
          <img src={png} alt="" />
        </div>
        <div className="about-country" style={{display: 'flex'}}>
          <h1>{official}</h1>

          <div className="main-details">
            <ul className="first">
              <li><p>Native Name: <span>{nativeName}</span></p></li>
              <li><p>Population: <span>{population.toLocaleString()}</span></p></li>
              <li><p>Region: <span>{region}</span></p></li>
              <li><p>Sub Region: <span>{subregion}</span></p></li>
              <li><p>Capital: <span>{capital?.map(cap => cap)}</span></p></li>
            </ul>
            <ul className="second">
              <li><p>Top Level Domain: <span>{tld?.map(tl => tl)}</span></p></li>
              <li><p>Currencies: <span>{currency?.map((curr, idx) => idx !== currency.length - 1 ? `${curr.name}, ` : `${curr.name}.`)}</span></p></li>
              <li><p>Languages: <span>{language?.map((lang, idx) => idx !== language.length - 1 ? `${lang}, ` : `${lang}.`)}</span></p></li>
            </ul>
          </div>
      </div>
        
      </div>
    </div>
  )
}

export default CountryDetail
