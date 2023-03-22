import React, { Component } from 'react';
import UpdateComponent from './WithCounter';

 class ClickCounter extends Component {
   
    
  render() {
    // const {count} = this.state;
    const {count,increment}=this.props;
    return (
      <div>
       
        <button onClick={increment}>Click {count} time</button>
      </div>
    )
  }
}

export default UpdateComponent(ClickCounter)
