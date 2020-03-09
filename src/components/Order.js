import React, { Component } from 'react'
import { formatPrice } from '../helpers'
import StripeCheckout from 'react-stripe-checkout';

export default class Order extends Component {
    renderOrder = (key) =>{

        let fish = this.props.fishes[key];
        let numberOfFish = this.props.order[key]
        let isAvaible = fish && fish.status === 'available'
        //if there is no fish return null
        if (!fish) return null
        if (isAvaible){
            return (
            <li key={key}>
                {numberOfFish} lbs {fish.name}{formatPrice(numberOfFish * fish.price)}
                <button onClick={() => this.props.cancelItem(key)}>&times;</button>
            </li>
            )
        }
        return <li key={key}>"for now this article is not available"</li>
    }

    handleToken = (token, adresses) =>{
        console.log(token, adresses)
    }

    render() {
        //array dall'oggetto order
        //l'array di ritorno è: [fish1, fish3, fish4]
        let arrayOrder = Object.keys(this.props.order);
        //accumulatore è il totale del prezzo, ed è il condenitore
        //key è la chiave con la quale si scalano le posizioni all'interno dell'array
        const total = arrayOrder.reduce((accumulatore, key) =>{
            let fish = this.props.fishes[key];
            let numberOfFish = this.props.order[key]
            let isAvaible = fish && fish.status === 'available'
            if (!fish) return null
            if (isAvaible){
                return accumulatore + numberOfFish * fish.price
            }
            return accumulatore
        }, 0)
        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <ul className="order">
                {arrayOrder.map(key => (this.renderOrder(key)))}
                </ul>
                <div className="total">
                    Total: <strong>{formatPrice(total)}</strong>
                </div>
                <StripeCheckout 
                    stripeKey="pk_test_s9yc6rH7cWDhFDCvL3nlAM9z00cc86OUMp"
                    token={this.handleToken}
                    amount={formatPrice(total)}
                    billingAddress
                    shippingAddress
                />
            </div>
        )
    }
}
