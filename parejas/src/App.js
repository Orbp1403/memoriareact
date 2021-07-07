import logo from './logo.svg';
import Header from './Header'
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Tablero from './Tablero';
import Baraja from './utils/Baraja';
import { Component } from 'react';

const getEstadoInicial = () => {
  const baraja = Baraja();
  return {
    baraja
  };
}
class App extends Component{
  constructor(props){
    super(props)
    this.state = getEstadoInicial()
  }
  render () {
    return (
      <div className="App">
        <Header />
        <br />
        <Tablero 
        baraja={this.state.baraja} />
      </div>
    );
  }
}

export default App;
