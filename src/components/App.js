import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Plate from './Plate'
import sampleFishes from '../sample-fishes'

export default class App extends Component {
    //set the state
    state = {
        fishes: {
        },
        menu:{}
    }

    //funzione di update da passare tramite props da App a AddFishForm
    addFish = (fish) =>{
        //per modificare lo stato di un componente serve:

        //fare copia dello stato da modificare
        const fishes = {...this.state.fishes}

        //inserire nella variabile fishes il valore dell'oggetto fish
        fishes[`fish${Date.now()}`] = fish

        //modificare lo stato con setState
        this.setState({
            fishes: fishes
        })

        console.log('add the fish ')
    }

    //caricamento fishes già presenti 
    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        })
    }

    //cancelliamo i fishes gia presenti
    cancelFishes = () => {
        this.setState({
            fishes: {}
        })
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header />
                    <ul className="fishes">
                        {Object.entries(this.state.fishes).map((fish, index) => (
                            <Plate 
                                key={index}
                                name={fish[1].name} 
                                image={fish[1].image}
                                desc={fish[1].desc}
                                price={fish[1].price}
                                status={fish[1].status}
                            />)
                        )}
                    </ul>
                </div> 
                <Order />
                <Inventory 
                    addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes}
                    cancelFishes={this.cancelFishes}
                />
            </div>
        )
    }
}
