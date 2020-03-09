import React, { Component } from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import LogIn from './LogIn'

export default class Inventory extends Component {


    authenticate(provider){
        console.log(provider)
    }

    render() {
        return(
            <div>
                <h1>Inventory</h1>
                <LogIn 
                    authenticate={this.authenticate}
                />  
            </div>                
        )
        return (
            <div className="inventory">
                Inventory
                {Object.keys(this.props.fishes).map(key => (
                    <EditFishForm 
                        key={key}
                        index={key}
                        details={this.props.fishes[key]}
                        match={this.props.match}
                        addEditFish={this.props.addEditFish}
                        cancelOneFish={this.props.cancelOneFish}
                    />
                ))}
                <AddFishForm  addFish={this.props.addFish}/>
                <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
                <button onClick={this.props.cancelFishes}>Cencel all fishes</button>
            </div>
        )
    }
}
