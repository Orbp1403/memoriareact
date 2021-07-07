import logo from './logo.svg';
import Header from './Header'
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Tablero from './Tablero';

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <Tablero />
    </div>
  );
}

export default App;
