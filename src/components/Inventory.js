import React, { Component } from 'react';
import firebase from 'firebase'
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import LogIn from './LogIn'
import base, { firebaseApp } from '../base'
// import base from '../base'

class Inventory extends Component {
    
    state = {
        uid: null,
        owner: null
    }

    //se siamo già loggati e viere ricaricata la pagina verificare se l'utente è ancora loggato,
    //se si richiamare authHandler che setterà come state.uid il uid passato come parametro in {user}
    componentDidMount(){
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.authHandler({user})
            }
          });
    }

    
    authHandler = async (authData) =>{
        console.log(authData)
        //recuperare solo la porzione del db con id del menù
        const store =  await base.fetch(this.props.storeId, { context: this })
        console.log(store)

        console.log(authData.user.uid)
        //Reclamare la proprietà nel caso in cui non ci sia proprietario
        if (!store.owner){
            base.post(`${this.props.storeId}/owner`, {
                data: authData.user.uid
            })
        }
        // 3. Set the state of the inventory component to reflect the current user
        this.setState({
            uid: authData.user.uid,
            owner: store.owner || authData.user.uid
        })
    }

    authenticate = (provider) =>{
        //creare un provider dinamico in base al bottone premuto
        console.log(this)
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.authHandler)
    }

    

    // logout

    logout = async () =>{
        console.log('logout')
        await firebase.auth().signOut()
        this.setState({
            uid: null
        })
    }

    render() {

        //creo un componentino per il logout

        const Logout = <button onClick={this.logout}>LogOut</button>


        if (!this.state.uid){
            return <LogIn authenticate={this.authenticate} />
        }
         
        if(this.state.uid !== this.state.owner){
            return(
                <div>
                    <h2>Sorry you aren't the owner</h2>
                    {Logout}
                </div>
            )
        }

        return (
            <div className="inventory">
                
                <h1>Inventory</h1>
                {Logout}
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

export default Inventory