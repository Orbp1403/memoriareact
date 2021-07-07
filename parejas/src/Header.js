import React, { Component } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <div className="navbar-brand">
                            <h1 className="colortitulo letratitulo">
                                Juego de parejas
                            </h1>
                        </div>
                        <div>
                            <h2 className="colortitulo letratitulo">
                                Intentos: 
                            </h2>
                        </div>
                        <div className="d-flex">
                            <div>
                                <button className="btn btn-outline-danger">
                                    <h3 className="colortitulo">
                                        <FontAwesomeIcon icon={faRedo}></FontAwesomeIcon>
                                        {'\u00A0'}
                                        Reiniciar
                                    </h3>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
