import React, { Component } from "react";

class Message extends Component{
    constructor(){
        super();
        this.state = {
            message: "this is state"
        }
    }
    changemessage(){
        this.setState({
            message: "state has been change"
        })
    }
    render(){
      return(
            <div className="message">
               <h1>this is state tut</h1>
               <h3>{this.state.message}</h3>
               <button onClick={()=> this.changemessage()}>State</button>
            </div>
        )
    }
}
export default Message;