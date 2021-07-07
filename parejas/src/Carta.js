import React, { Component } from 'react'
import './Carta.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAd } from '@fortawesome/free-solid-svg-icons'

export default class Carta extends Component {
    render() {
        return (
            <div className="col">
                <div className="p-3 border bg-warning carta">
                    <h1 className="icono">
                        <FontAwesomeIcon icon={this.props.imagen} className="icono"></FontAwesomeIcon>
                    </h1>
                </div>
            </div>
        )
    }
}
