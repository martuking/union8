import React, {Component} from 'react';
import Input from '../components/Input';

class Form extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="jumbotron">
        <form>
          {this.props.data.map((d, i) => {
            return (
              <Input label={d} key={i} abc={this.props.dfg} />
            );
          })}
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;