import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Plate from './Plate'
import sampleFishes from '../sample-fishes'
import base from '../base'

export default class App extends Component {
    // the state
    state = {
        fishes: {},
        order:{}
    }


    //lifecycle of React


    componentDidMount(){
        let { params } = this.props.match
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        })
    }

    componentWillUnmount(){
        base.removeBinding(this.ref)
    }

    //CUSTOM METHOD

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

    //aggiungo singolo fish all'ordine
    addToOrder = (key) => {
        //fare copia della stato da modificare
        let order = {...this.state.order}
        //aggiungendo il fish selezionato o incrementando il valore se già presente
        order[key] = order[key] + 1 || 1
        //modificare lo stato
        this.setState({
            order: order
        })

    }

    //cancello singolo item nel componente in ordine
    cancelItem = (key) => {
        //fare copia della stato da modificare
        let order = {...this.state.order}
        //decremento il fish selezionato e verifico che una volta arrivato a 0 non vada a -1
        order[key] = order[key] > 0 ? order[key] -1 : order[key] = 0
        //modificare lo stato
        this.setState({
            order: order
        })
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
                        {Object.keys(this.state.fishes).map(key => (
                            <Plate 
                                key={key}
                                index={key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}
                            />)
                        )}
                    </ul>
                </div> 
                <Order 
                    fishes={this.state.fishes}
                    order={this.state.order}
                    cancelItem={this.cancelItem}
                />
                <Inventory 
                    // passo tramite props le funzioni per renderle accessibili ai livelli di componenti più bassi
                    addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes}
                    cancelFishes={this.cancelFishes}
                />
            </div>
        )
    }
}
