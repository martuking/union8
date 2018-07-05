import React, { Component } from 'react';
import Input from '../components/Input';

class Form extends Component () {
  constructor(props) {
    super(props);
    this.state = {
      data:props.data
    };
  }
  debugger
  addGrua(event){
    event.preventDefault();
    console.log(this);
  }

  render(){
    return (
      <div className="jumbotron">
        <form onSubmit={this.addGrua.bind(this)}>
            {this.state.data.map((d,i)=>{
                return(
                  <Input label={d} key={i} />
                );
            })}
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;