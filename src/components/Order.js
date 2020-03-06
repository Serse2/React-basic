import React, { Component } from 'react'
import { formatPrice } from '../helpers'

export default class Order extends Component {
    // exercise on reduce

    // constructor(props){
    //     super(props)
    //     this.anagrafica = [
    //       {id: '1', nome: 'Apple', fondatore: 'Jobs', prezzo: 30},
    //       {id: '2', nome: 'Google', fondatore: 'Brin', prezzo: 31},
    //       {id: '3', nome: 'Amazon', fondatore: 'Bezoz', prezzo: 15}
    //     ]
    //   }
    
    
    
    renderOrder = (key) =>{

        let fish = this.props.fishes[key];
        let numberOfFish = this.props.order[key]
        let isAvaible = fish && fish.status === 'available'
        //if there is no fish return null
        if (!fish) return null
        if (isAvaible && numberOfFish > 0){
            return (
            <li key={key}>
                {numberOfFish} lbs {fish.name}{formatPrice(numberOfFish * fish.price)}
                <button onClick={() => this.props.cancelItem(key)}>&times;</button>
            </li>
            )
        }
        return <li key={key}>"for now this article is not available"</li>
    }



    
    render() {
        // exercise on reduce
        // const totalAge = this.anagrafica.reduce((accumulatore, currentValue) => {
        //     let prezzo = currentValue.prezzo
        //     console.log('questo è il prezzo' + prezzo)
        //     return accumulatore + prezzo
        // }, 0)
        // console.log(totalAge)
        

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
            </div>
        )
    }
}
