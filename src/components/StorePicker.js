import React, { Component, Fragment } from 'react';
import {getFunName} from '../helpers';

export default class StorePicker extends Component {
    myInput = React.createRef();

    goToStore = (e) => {
        //stop the submitting
        e.preventDefault();
        //take the value of input text
        let currentValue = this.myInput.current.value
        console.log(currentValue)
        //change the URL in /store/myInput
        this.props.history.push(`/store/${currentValue}`)
    }


    render() {
        return (
            <Fragment>
                <form className="store-selector" onSubmit={this.goToStore}>
                    <h2>Please enter your order name</h2>   
                    <input 
                        type="text" 
                        required 
                        placeholder='Store name' 
                        defaultValue={getFunName()}
                        ref={this.myInput}
                    />
                    <button type="submit">Visit store ⮕</button>
                </form>
            </Fragment>   
        )
    }
}
