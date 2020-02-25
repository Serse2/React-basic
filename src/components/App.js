import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Plate from './Plate'
import fishes from '../sample-fishes'

export default class App extends Component {
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header />
                    {Object.entries(fishes).map((fish, index) => (
                        <Plate 
                            key={index}
                            name={fish[1].name} 
                            image={fish[1].image}
                            desc={fish[1].desc}
                            price={fish[1].price}
                            status={fish[1].status}
                        />)
                    )}
                </div> 
                <Order />
                <Inventory />
            </div>
        )
    }
}
