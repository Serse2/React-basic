import React, { Component } from 'react'
import { formatPrice } from '../helpers'

export default class Plate extends Component {
    render() {
        // destructor the variables
        const {image, name, price, desc, status} = this.props.details
        let isAvailable = status === 'available'

        return (
            <li className="menu-fish">
                <img src={image} alt={name}/>
                <h3 className="fish-name">{name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable} onClick={ ()=> this.props.addToOrder(this.props.index)}>{isAvailable ? 'Add to cart' : 'Sold Out'}</button>
            </li>
        )
    }
}
