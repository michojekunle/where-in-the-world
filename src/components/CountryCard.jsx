import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const CountryCard = ({ country, dataAos }) => {
  const { flags: { png }, name: { official }, population, region, capital } = country;
  const { theme } = useContext(ThemeContext);
  return (
    <div 
      className='country-card' 
      style={{background: theme.elements}}
      data-aos={dataAos}
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
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
