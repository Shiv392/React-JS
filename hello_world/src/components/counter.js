import React, { Component } from 'react'



export class counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }

    }
    increment() {
        this.setState({  //setstate() is asynchrous 
            count: this.state.count + 1
        }, () => { console.log(`callback value` + this.state.count); })
        console.log(this.state.count);  //this wil exicute first
    }
    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default counter;

