import React, { Component } from 'react';
import axios from 'axios';

 class HttpPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         title:'',
         body:''
      }
    }
    changeHandler=(e)=>{
        this.setState({ [e.target.name]: e.target.value})
    }
    submitHandler=e=>{
        e.preventDefault();
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
    }
  render() {
    const {userId,title,body}=this.state;
    return (
      <div className='container'>
        <form onSubmit={this.submitHandler}>
  <div class="form-group">
    <label for="userId">userId</label>
    <input type="text" name="userId" class="form-control" value={userId} id="userId" aria-describedby="emailHelp" placeholder="Enter userId"
    onChange={this.changeHandler}
    required/>
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div class="form-group">
    <label for="title">Title</label>
    <input type="text" name="title" value={title} class="form-control" id="title" placeholder="title" 
    onChange={this.changeHandler}
    required />
  </div>
  <div class="form-group ">
  <label for="body">Body</label>
  <input type="text" name="body" value={body} class="form-control" id="body" placeholder='Body'
  onChange={this.changeHandler}
  required />
    {/* <label class="form-check-label" for="exampleCheck1">Check me out</label> */}
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      </div>
    )
  }
}

export default HttpPost
