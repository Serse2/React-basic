import React, { Component } from 'react'
import { formatPrice } from '../helpers'

export default class Plate extends Component {
    render() {
        return (
            <div className="menu-fish">
                <img src={this.props.details.image} alt={this.props.details.name}/>
                <h3 className="fish-name">{this.props.details.name}
                    <span className="price">{formatPrice(this.props.details.price)}</span>
                </h3>
                <p>{this.props.details.desc}</p>
                {/* <div>Status: {this.props.status}</div> */}
            </div>
        )
    }
}
