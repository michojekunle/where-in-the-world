import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Countries from './components/Countries';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ThemeContextProvider, { ThemeContext } from './context/ThemeContext';


function App() {
  const { theme } = useContext(ThemeContext);
  return (
        <div style ={{ background: theme.bg }} className="App">
            <Header />
            <Navbar />
            <Countries />
        </div>
  );
}

export default App;
