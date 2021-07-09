import logo from './logo.svg';
import Header from './Header'
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Tablero from './Tablero';
import Baraja from './utils/Baraja';
import React, { Component } from 'react';

const getEstadoInicial = () => {
  let baraja = Baraja();
  return {
    baraja, 
    parejaseleccionada: [],
    estacomparando: false,
  };
}
class App extends Component{
  constructor(props){
    super(props)
    this.state = getEstadoInicial()
    this.seleccionarcarta = this.seleccionarcarta.bind(this)
    this.compararParejas = this.compararParejas.bind(this)
  }
  render () {
    return (
      <div className="App">
        <Header />
        <br />
        <Tablero 
        baraja={this.state.baraja} 
        parejaseleccionada={this.state.parejaseleccionada}
        estacomparando={this.state.estacomparando}
        seleccionarcarta={(carta) => this.seleccionarcarta(carta)}
        voltear={(carta) => this.voltear(carta)}/>
      </div>
    );
  }

  voltear(carta){
    carta.volteada = true;
  }

  seleccionarcarta(carta){
    if(this.state.estacomparando || 
      this.state.parejaseleccionada.indexOf(carta) > -1 ||
      carta.adivinada){
        return;
      }
      carta.volteada = true;
      const parejaseleccionada = [...this.state.parejaseleccionada, carta];
      this.setState({
        parejaseleccionada
      })

      if(parejaseleccionada.length === 2){
        this.compararParejas(parejaseleccionada)
      }
  }

  compararParejas(parejaseleccionada){
    this.setState({
      estacomparando: true
    })
    setTimeout(() => {
      const [cartauno, cartados] = parejaseleccionada;
      let baraja = this.state.baraja;
      console.log(cartauno.icon.iconName)
      if(cartauno.icon.iconName === cartados.icon.iconName){
        baraja = baraja.map((carta) => {
          if(carta.icon.iconName !== cartauno.icon.iconName){
            return carta
          }
          return {...carta, adivinada:true}
        })
      }else{
        baraja = baraja.map((carta)=>{
          if(carta.icon.iconName === cartauno.icon.iconName || carta.icon.iconName === cartados.icon.iconName){
            return {...carta, volteada:false}
          }
          return carta
        })
      }


      this.setState({
        baraja,
        estacomparando: false,
        parejaseleccionada: []
      })
      console.log("paso")
    }, 1000)
  }
}

export default App;
