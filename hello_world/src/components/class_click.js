import React, { Component } from 'react'

 class class_click extends Component {
    constructor(props) {
      super(props)
      this.clickhandler = this.clickhandler.bind(this)
    }
    clickhandler() {
      alert('this is class type click event')
    }
  render() {
    return (
      <div>
        <button onClick={this.clickhandler}>Click me Class type</button>
      </div>
    )
  }
}

export default class_click
