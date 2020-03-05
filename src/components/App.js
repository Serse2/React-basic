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
        order: {}
    }


    //lifecycle of React


    componentDidMount(){
        let { params } = this.props.match
        //questo this.ref è differente da quello utilizzato in React.
        //infatti si tratta di una reference di un pezzo di dati sul database
        //in questo caso il database resta in ascolto di tutte le modifiche per lo storeId selezionato
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        })

        let localStoregeRef = JSON.parse(localStorage.getItem(params.storeId))
        console.log(localStoregeRef)
        if (localStoregeRef) {
           this.setState({order: localStoregeRef})
        }
    }


    componentDidUpdate(){
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
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
    }

    addEditFish = (index, fish) => {
        //fare copia dello stato da modificare
        const fishes = {...this.state.fishes}

        //inserire nella variabile fishes il valore dell'oggetto fish
        fishes[index] = fish

        //modificare lo stato con setState
        this.setState({
            fishes: fishes
        })
        console.log('edit the fish')
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
        console.log(order,order[key], key)
        //decremento il fish selezionato e verifico che una volta arrivato a 0 non vada a -1
        order[key] = order[key] > 0 ? order[key] -1 : key = 0
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
                    fishes={this.state.fishes}
                    match={this.props.match}
                    addEditFish={this.addEditFish}
                />
            </div>
        )
    }
}
