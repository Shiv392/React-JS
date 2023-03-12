import React,{Component}  from "react";

class Welcome extends Component{
    render(){
        return(
            <h1 className="welcome">this is welcome component {this.props.name} as {this.props.hero}</h1>
        )
    }
}
export default Welcome;