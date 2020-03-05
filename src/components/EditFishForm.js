import React, { Component } from 'react'

export default class EditFishForm extends Component {

    //create the reference
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();


    editFish = (e) => {
        //stop the submitting
        e.preventDefault();
        let index = this.props.index
        let fish = {
            name: this.nameRef.current.value,
            price: this.priceRef.current.value,
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        }


        this.props.addEditFish(index, fish)
    }

    render() {
        let { name, price, status, desc, image } = this.props.details
        return (
            <form className="fish-edit" onSubmit={this.editFish}>
                <input name="name" type="text" placeholder="name" defaultValue={name} ref={this.nameRef}></input>
                <input name="price" type="text" placeholder="price" defaultValue={price} ref={this.priceRef}></input>
                <select name="status" type="text" placeholder="status" defaultValue={status} ref={this.statusRef}>
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                </select>
                <textarea name="desc" type="text" placeholder="description" defaultValue={desc} ref={this.descRef}></textarea>
                <input name="image" type="text" placeholder="image" defaultValue={image} ref={this.imageRef}></input>
                <button type="submit">Edit the fish</button>
            </form>

        )
    }
}
