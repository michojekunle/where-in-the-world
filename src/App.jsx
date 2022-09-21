import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ThemeContextProvider, { ThemeContext } from './context/ThemeContext';


function App() {
  const { theme } = useContext(ThemeContext);
  return (
        <div style ={{ background: theme.bg }} className="App">
            <Header />
        </div>
  );
}

export default App;
