import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import { CountriesContext } from '../context/CountriesContext';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const { getCountries } = useContext(CountriesContext);
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(country !== '') {
      getCountries(`name/${country.toLowerCase()}`);
    }
  }

  const handleRegionChange = (e) => {
    if (e.target.options[e.target.selectedIndex].value !== '') {
      getCountries(`region/${e.target.options[e.target.selectedIndex].value}`);
    }
  }

  useEffect(() => {
    getCountries('all');  
  }, [])


  
  return (
    <nav role={'navigation'} className='navbar'>
      <form onSubmit={handleSubmit} style={{background: theme.elements, color: theme.text}}>
        <button style={{color: theme.text}} type='submit'><i className="fas fa-search"></i></button>
        <input 
          type="text" 
          placeholder="Search for a country..."
          value={country}
          style={{color: theme.text}}
          onChange={(e) => setCountry(e.target.value)}
        />
      </form>

      <select style={{background: theme.elements, color: theme.text}} name="region" id="region" placeholder='Filter by Region' onChange={handleRegionChange}>
        <option value="" disabled selected hidden>Filter by Region...</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </nav>
  )
}

export default Navbar
