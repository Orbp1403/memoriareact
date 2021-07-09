import React, { Component } from 'react'
import './Carta.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipCard from 'react-card-flip'

export default class Carta extends Component {
    render() {
        return (
            <div className="col" onClick={this.props.seleccionarcarta}>
                <div className="p-3 border carta bg-warning">
                <FlipCard
                        isFlipped={this.props.volteada || this.props.adivinada}
                    >
                        <div className="portada bg-warning"></div>
                        <div className="portada bg-success">
                            <h1 className="icono">
                                <FontAwesomeIcon icon={this.props.imagen} className="icono"></FontAwesomeIcon>
                                <br></br>
                            </h1>
                        </div>
                    </FlipCard>
                </div>
            </div>
        )
    }
}
