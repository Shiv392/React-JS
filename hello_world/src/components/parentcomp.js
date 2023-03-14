import React, { Component } from 'react';
import Childcomp from './childcomp.js'

class parentcomp extends Component {
    constructor(props){
        super(props);
        this.state={
            parentname:'parent'
        }
        this.greetParent=this.greetParent.bind(this);
    }
   greetParent(child){
    alert(`Hello ${this.state.parentname} ${child}`)
   }

  render() {
    return (
      <div>
        <Childcomp greetHandler={this.greetParent}></Childcomp>
      </div>
    )
  }
}

export default parentcomp
