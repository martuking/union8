import React, { Component } from 'react';

class Select extends Component {
    constructor(props){
        super(prosp);
        this.state = {
            campos=[]
        }
    }
    render(){
        return(
            <div className="form-group">
                <label for="Inputselect">Select Number</label>
                <select className="form-control" >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
        );
    }
}

export default Select;