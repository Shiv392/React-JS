import React, { Component } from 'react';
import RegularComp from './RegularComp';
import PureComp from './PureComponent';

 class ParentComponent extends Component {
    constructor(){
        super();
        this.state={
            name:'shivsoni'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'shivsoni 2'
            })
        },2000)
    }
  render() {
    console.log(`parent component render ****`);
    return (
      <div>
        <h1>paret component</h1>
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComponent
