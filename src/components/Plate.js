import React, { Component } from 'react'
import { formatPrice } from '../helpers'

export default class Plate extends Component {
    render() {
        return (
            <div className="menu-fish">
                <img src={this.props.image} alt={this.props.name}/>
                <h3 className="fish-name">{this.props.name}
                    <span className="price">{formatPrice(this.props.price)}</span>
                </h3>
                <p>{this.props.desc}</p>
                {/* <div>Status: {this.props.status}</div> */}
            </div>
        )
    }
}
