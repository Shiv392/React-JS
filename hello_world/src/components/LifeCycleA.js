import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB.js'

 class LifeCycleA extends Component {
    constructor(){
        super();
        this.state={
            name:'shivsoni'
        }
        console.log(`lifecycle A constructor()`)
    }
    static getDerivedStateFromProps(props,state){
        console.log(`lifecycle A static getStaticFromProps()`);
        return null;
    }
    componentDidMount(){
        console.log(`lifecycle A componentDidMount()`);
    }
    shouldComponentUpdate(){
      console.log(`lifecycle B shouldComponentUpdate()`);
      return true;
  } 
  getSnapshotBeforeUpdate(prevprops,prevstate){
    console.log(`lifecycle a getsnapshotbeforeupdate()`);
    return null;
  }
  componentDidUpdate(){
    console.log(`lifecycle A componentDidUpdate()`);
  }
  changeState=()=>{
    this.setState({
      name:'change shivsoni'
    })
  }
  render() {
    console.log(`lifecycle A render()`)
    return (
    <div>
        <div>LifeCycleA methods</div>
        <button onClick={this.changeState}>button onchange</button>
     <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA
