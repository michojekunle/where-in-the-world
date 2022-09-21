import './App.css';
import Header from './components/Header';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Header />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
