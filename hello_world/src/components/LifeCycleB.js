import React, { Component } from 'react'


 class LifeCycleB extends Component {
    constructor(){
        super();
        this.state={
            name:'shivsoni'
        }
        console.log(`lifecycle B constructor()`);
    }
    static getDerivedStateFromProps(props,state){
        console.log(`lifecycle B static getStaticFromProps()`);
        return null;
    }
    componentDidMount(){
        console.log(`lifecycle B componentDidMount()`);
    }
    shouldComponentUpdate(){
        console.log(`lifecycle B shouldComponentUpdate()`);
        return true;
    } 
    getSnapshotBeforeUpdate(prevprops,prevstate){
      console.log(`lifecycle B getsnapshotbeforeupdate()`);
      return null;
    }
    componentDidUpdate(){
      console.log(`lifecycle B componentDidUpdate()`);
    }
  render() {
    console.log(`lifecycle B render()`)
    return(
        <div>
            <div>lifecycleB method render() </div>

        </div>
    )
}
}

export default LifeCycleB
