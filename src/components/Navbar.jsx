import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import { CountriesContext } from '../context/CountriesContext';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const { getCountries, countries } = useContext(CountriesContext);

  const [region, setRegion] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getCountries(`name/${country}`);
  }

  useEffect(() => {
    getCountries(`region/${region}`);
  },[region]);

  useEffect(() => {
    getCountries('all');  
  }, [])


  
  return (
    <nav role={'navigation'}>
      <form onSubmit={handleSubmit}>
        <button type='submit'><i className="fas fa-search"></i></button>
        <input 
          type="text" 
          placeholder="Search for a country..."
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </form>

      <select name="region" id="region" placeholder='Filter by Region' onChange={(e) => setRegion(e.target.value)}>
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
