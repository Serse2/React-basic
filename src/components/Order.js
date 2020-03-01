import React, { Component } from 'react'
import { formatPrice } from '../helpers'

export default class Order extends Component {
    render() {

        //oggetto dell'ordine
        let orderId = Object.keys(this.props.order);
        const total = orderId.reduce((accumulatore, key) =>{
            let fish = this.props.fishes[key];
            let numberOfFish = this.props.order[key]

            console.log(fish, numberOfFish)


            let isAvaible = fish || fish.status === 'available'
            if (isAvaible){
                return accumulatore + (numberOfFish * fish.price)
            }
            return accumulatore
        }, 0)

        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <ul>
                <li>{orderId}</li>
                {formatPrice(total)}
                </ul>
            </div>
        )
    }
}
