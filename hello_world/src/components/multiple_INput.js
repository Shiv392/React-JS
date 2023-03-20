import React, { Component } from 'react'

export class multiple_INput extends Component {
    constructor(){
        super();
        this.state={
            isGoing:false,
            numberofguest:0
        }
    }
    HandleInput=(event)=>{
      console.log(event.target);
        const target=event.target;
        const value=target.type==='checkbox'?target.checked:target.value;
        const name=target.name;
        this.setState({
          [name]:value
        })
    }
    
  render() {
    return (
      <div>
        <form>
            <label>Is Going:</label>
            <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.HandleInput}/><br/>
            <label>Number of Guests:</label>
            <input type="number" name="numberofguest" value={this.state.numberofguest} onChange={this.HandleInput}/><br/>
        </form>
      </div>
    )
  }
}

export default multiple_INput
