import React, { Component } from 'react'
import Carta from './Carta'
import './Tablero.css'

export default class Tablero extends Component {
    render() {
        return (
            <div className="container">
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    {
                        this.props.baraja.map((carta, index) => {
                            return <Carta
                                    key={index}
                                    imagen={carta.icon}
                                    volteada={carta.volteada}
                                    seleccionarcarta={()=>this.props.seleccionarcarta(carta)}
                                    adivinada={carta.adivinada}
                                    />
                        })
                    }
                </div>
            </div>
        )
    }
}
