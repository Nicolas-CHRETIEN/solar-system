import logo from './logo.svg';
import './components/BootstrapMin.css';
import './App.css';
import Bodies from './components/Bodies/Bodies/Bodies';
import NavBar from './components/NavBar.jsx';
import Canvas from './components/simulation/Canvas.jsx';
import useFetch from './hooks/useFetch';

function App () {
    return (
        <div className="App">
        <header className="App-header">
            <img src={ logo } className="App-logo" alt="logo" />
            <p>
                Modifier <code>src/App.js</code> et sauvegarder pour recharger.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Apprendre React
            </a>
        </header>
            <NavBar/>
            <Bodies/>
        </div>
    );
}

export default App;
