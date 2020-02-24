import React, { Component, Fragment } from 'react'

export default class StorePicker extends Component {
    render() {
        return (
            <Fragment>
                <form className="store-selector">
                    <h2>Please enter your order name</h2>   
                    <input type="text" required placeholder='Store name'></input>
                    <button type="submit">
                        Visit store ⮕
                    </button>
                </form>
            </Fragment>   
        )
    }
}
