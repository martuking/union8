import * as React from 'react';

const Input = (props) => {
    return(
        <div className="form-group">
            <label for={props.label}><b>{props.label}</b></label>
            <input type="text" className="form-control" id={props.label} placeholder={props.label}/>
        </div>
    );
}

export default Input