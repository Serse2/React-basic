import React, { Component } from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

export default class Inventory extends Component {
    render() {
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
                    />
                ))}
                <AddFishForm  addFish={this.props.addFish}/>
                <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
                <button onClick={this.props.cancelFishes}>Cencel all fishes</button>
            </div>
        )
    }
}
