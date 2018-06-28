import React, { Component } from 'react';

class CheckBox extends Component {
    constructor(props){
        super(prosp);
        this.state = {
            campos=[]
        }
    }
    render(){
        return(
            <div className="checkbox">
                <label>
                <input type="checkbox" id="yesno"/> Si / No
                </label>
            </div>
        );
    }
}

export default CheckBox;