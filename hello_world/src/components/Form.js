import React, { Component } from 'react'

export class Form extends Component {
    constructor(){
        super();
        this.state={
        input:'',
        email:'',
        comment:'',
        topic:'React'
        }
    }
    onchangehandler=(event)=>{
//    console.log(event);
console.log(event.target.value);
this.setState({
    input:event.target.value,
    email:event.target.email
             })  
}

    textareachange=(event)=>{
     console.log(event.target.value);
     this.setState({
        comment:event.target.value
     })
    }

    selectchange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
  
    handlesubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
    }

  render() {
    return (
    <form onSubmit={this.handlesubmit}>
        <div>
        <label for="name">Name:</label><br/>
        <input type="text" name="name" id="name" value={this.state.input} onChange={this.onchangehandler} /><br/>
         <label for="email">Email:</label><br/>
         <input type="email" name="email" id="email" value={this.state.email} onChange={this.onchangehandler} /><br/>
        </div>

        <div>
      <label for="comments">Comments</label> <br />
      <textarea  id="comment" value={this.state.comment} onChange={this.textareachange}/>
        </div>

        <div>
     <label form='select'>Topic</label><br/>
     <select value={this.state.topic} onChange={this.selectchange}>
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="vuejs">VeuJs</option>
     </select>

        </div>
        <button type="submit">Submit</button>
    </form>
    
    )
  }
}

export default Form
