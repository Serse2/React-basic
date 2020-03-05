import React, { Component } from 'react'

export default class EditFishForm extends Component {
    render() {
        let { name, price, status, desc, image } = this.props.details
        return (
            <form className="fish-edit" >
                <input name="name" type="text" placeholder="name" defaultValue={name}></input>
                <input name="price" type="text" placeholder="price" defaultValue={price}></input>
                <select name="status" type="text" placeholder="status" defaultValue={status}>
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                </select>
                <textarea name="desc" type="text" placeholder="description" defaultValue={desc}></textarea>
                <input name="image" type="text" placeholder="image" defaultValue={image}></input>
                <button type="submit">+ add fish</button>
            </form>

        )
    }
}
