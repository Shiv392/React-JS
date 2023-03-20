import React, { Component } from 'react'

 class RegularComp extends Component {
    
  render() {
    console.log(`regular component render ***`);
    return (
      <div>
        <h1>Regular Component {this.props.name}</h1>
      </div>
    )
  }
}

export default RegularComp
