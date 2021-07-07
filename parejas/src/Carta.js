import React, { Component } from 'react'
import './Carta.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FlexyFlipCard } from 'flexy-flipcards'
import ReactCardFlip from 'react-card-flip'

export default class Carta extends Component {
    constructor(props){
        super(props)
        this.state = {
            isFlipped:false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (e) => {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped : !prevState.isFlipped }))
    }
    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped}>
                <div className="col">
                    <div className="p-3 border bg-warning carta" onClick={this.handleClick}>
                    </div>
                </div>
                <div className="col">
                    <div className="p-3 border bg-warning carta" onClick={this.handleClick}>
                        <h1 className="icono">
                            <FontAwesomeIcon icon={this.props.imagen} className="icono"></FontAwesomeIcon>
                        </h1>
                    </div>
                </div>
            </ReactCardFlip>
        )
    }
}
