import React, { Component } from 'react'
import UpdateComponent from './WithCounter'

 class HoverCount extends Component {
   
  render() {
    // const {count}=this.state;
    const {count,increment}=this.props;
    return (
      <div>
        
        <h1 onMouseOver={increment}>Hovered {count} times</h1>
      </div>
    )
  }
}

export default UpdateComponent(HoverCount)
