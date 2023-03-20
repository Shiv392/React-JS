import React,{PureComponent}  from "react";

class PureComp extends PureComponent{
    constructor(){
        super();
    }
    render(){
        console.log(`pure component render ***`);
        return (
            <div>
                <h1>Pure Components {this.props.name}</h1>
            </div>
        )
    }

}
export default PureComp;