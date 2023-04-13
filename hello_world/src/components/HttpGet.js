import React, { Component } from 'react';
import axios from 'axios';

class HttpGet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         error:""
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response);
            this.setState({ posts: response.data})
        }).catch(err=>{         
            console.log(`could not make get request `, err);
            this.setState({error:'error retriving data'})
        })
    }
    
  render() {
    const {posts,error}=this.state;
    return (
      <div>
        <h1>List of post<button className='btn btn-dark'>Click</button></h1>
        {
            posts.length ? posts.map(post=><p key={post.id}>{post.title}</p>):null
        }
        {error ? <p>error</p>: null}
      </div>
    )
  }
}

export default HttpGet
