import React, { Component } from 'react'

export default class EditFishForm extends Component {

    handleEdit = (e) => {
        //index passato dal componente inventory (es. fish1)
        let index = this.props.index
        //prendo in modo dinamico il referimento all'input modificato
        let nameEdit = e.currentTarget.name
        //prendo in modo dinamico la variazione dell'input
        let valueEdit = e.currentTarget.value

        let fish = {
            //recupera tutti i dati del form di edit
            ...this.props.fishes,
            //aggiorna i dati (es name: pico pallo)
            [nameEdit]: valueEdit
        }

        //richiama la funzione per la modifica dello stato, che dovrà salire di due livelli per raggiungere App (il componente nel quale vi è lo state)
        this.props.addEditFish(index, fish)
        

    }

    render() {
        let { name, price, status, desc, image } = this.props.details
        return (
            <form className="fish-edit">
                <input name="name" type="text"  defaultValue={name} onChange={this.handleEdit}></input>
                <input name="price" type="text"  defaultValue={price} onChange={this.handleEdit}></input>
                <select name="status" type="text"  defaultValue={status} onChange={this.handleEdit}>
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                </select>
                <textarea name="desc" type="text" defaultValue={desc} onChange={this.handleEdit}></textarea>
                <input name="image" type="text" defaultValue={image} onChange={this.handleEdit}></input>
            </form>

        )
    }
}
