import React, { Component } from 'react';
import firebase from 'firebase'
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import LogIn from './LogIn'
import { firebaseApp } from '../base'
import base from '../base'

export default class Inventory extends Component {


    // authHendler = async (authData) => {
    //     //selezionare i dati dal db del solo ID di catch of the day (http://localhost:3000/store/fancy-helpless-syllabuses)
    //     const data = await base.fetch(this.props.storeId, {context: this})
    //     console.log(authData)
    //     console.log(data)

    // }

    authenticate(provider){
        //creare un provider dinamico in base al bottone premuto
        var providerAuth = new firebase.auth[`${provider}AuthProvider`]()
        
        firebaseApp.auth().signInWithPopup(providerAuth).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            console.log(result)
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
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
