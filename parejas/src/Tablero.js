import React, { Component } from 'react'
import Carta from './Carta'
import './Tablero.css'

export default class Tablero extends Component {
    render() {
        let cartas = [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        return (
            <div className="container">
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    {
                        cartas.map((carta) => {
                            return <Carta />
                        })
                    }
                </div>
            </div>
        )
    }
}
