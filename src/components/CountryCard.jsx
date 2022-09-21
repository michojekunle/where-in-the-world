import React from 'react'

const CountryCard = ({country}) => {

  return (
    <div className='country-card'>
      <div className="flag"><img src={""} alt={""} /></div>
      <h3>Country</h3>
      <p>Population: {}</p>
      <p>Region: {}</p>
      <p>Capital: {}</p>
    </div>
  )
}

export default CountryCard
