import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Countries from './components/Countries';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { ThemeContext } from './context/ThemeContext';
import CountryDetail from './components/CountryDetail';


function App() {
  const { theme } = useContext(ThemeContext);
  return (
        <div style ={{ background: theme.bg }} className="App">
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path='/' element={<Countries/>}/>
                <Route path='/countrydetail/:commonName' element={<CountryDetail/>}/>
              </Routes>            
            </BrowserRouter>
        </div>
  );
}

export default App;
