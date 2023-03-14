import React, { Component } from 'react'

 class eventbind extends Component {
    constructor(){
        super();
        this.state = {
          message: 'hello'
        }
        this.change = this.change.bind(this);
    }
    change(){
        this.setState({
            message:'byy'
        })
        console.log(this);
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
       
        {/* using professional way */}
        <button onClick={()=>{this.change()}}>Click</button>
      </div>
    )
  }
}

export default eventbind;
