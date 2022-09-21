import React from 'react'

const CountryCard = ({country}) => {
  const { flags: { png }, name: { official }, population, region, capital } = country;
 
  return (
    <div className='country-card'>
      <div className="flag"><img src={png} alt={official} /></div>
      <h3>{official}</h3>
      <p>Population: <span>{population}</span></p>
      <p>Region: <span>{region}</span></p>
      <p>Capital: <span>{capital?.map(cap => cap)}</span></p>
    </div>
  )
}

export default CountryCard
