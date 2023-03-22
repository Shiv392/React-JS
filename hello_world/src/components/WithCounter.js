import React from "react";
import { render } from "react-dom";

const UpdateComponent=(OriginalComponent)=>{
  class NewComponent extends React.Component{
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
    Increment=()=>{
      this.setState(prevcount=>{
          return {count:prevcount.count+1}
      })
    }
    render(){
        return (
            <OriginalComponent count={this.state.count} increment={this.Increment} />
        )
    }
  }
  return NewComponent
}
export default UpdateComponent