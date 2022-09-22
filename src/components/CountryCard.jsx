import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const CountryCard = ({country}) => {
  const { flags: { png }, name: { official }, population, region, capital } = country;
  const { theme } = useContext(ThemeContext);
  return (
    <div className='country-card' style={{background: theme.elements}}>
      <div className="flag"><img src={png} alt={official} /></div>
      <div className="about-country">
        <h3 style={{color: theme.text}}>{official}</h3>
        <p style={{color: theme.text}}>Population: <span>{population.toLocaleString()}</span></p>
        <p style={{color: theme.text}}>Region: <span>{region}</span></p>
        <p style={{color: theme.text}}>Capital: <span>{capital?.map(cap => cap)}</span></p>
      
      </div>
    </div>
  )
}

export default CountryCard
