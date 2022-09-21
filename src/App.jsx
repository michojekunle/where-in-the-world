import './App.css';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        APP
      </ThemeContextProvider>
    </div>
  );
}

export default App;
