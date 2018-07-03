import React, { Component } from 'react';

class SubmitButton extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <button type="submit" className="btn btn-info">Submit</button>
        );
    }
}

export default SubmitButton;