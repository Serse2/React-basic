import React, { Component } from 'react'

export default class AddFishForm extends Component {
    //create the reference
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = (e) =>{
        //stop the submitting
        e.preventDefault();
        //take all the value into an object called fish

        let fish = {
            name: this.nameRef.current.value,
            price: this.priceRef.current.value,
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        }

        //richiamare la funzione addFish passata dal componente App tramite props
        this.props.addFish(fish)

    }
    
    
    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" type="text" placeholder="name" ref={this.nameRef}></input>
                <input name="price" type="text" placeholder="price" ref={this.priceRef}></input>
                <select name="status" type="text" placeholder="status" ref={this.statusRef}>
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                </select>
                <textarea name="desc" type="text" placeholder="description" ref={this.descRef}></textarea>
                <input name="image" type="text" placeholder="image" ref={this.imageRef}></input>
                <button type="submit">+ add fish</button>
            </form>
        )
    }
}
