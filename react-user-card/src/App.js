import React from 'react';
import logo from './logo.svg';
import axios from "axios"
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      followers:[],
      users : [],
    }
  }
  componentDidMount=()=>{
 axios.get ("https://api.github.com/users/AlexC007")
    .then (data => {console.log('users', data.data);
     this.setState ({
       users: data.data,
     });
  })

  .then( 
    axios.get("https://api.github.com/users/AlexC007/followers")
    .then (follower => {console.log('followers', follower.data[0]);
     this.setState ({
       followers: follower.data[0],
     });
  })
  )
  .catch(error => {console.log('Not quite Suga')});

  
}


 render(){
  return (
    <div className="user">
      <h1>{this.state.users.name}</h1>
      <img src = {this.state.users.avatar_url}/>
      <p>{this.state.users.bio}</p>
      <h5>Followers:</h5>
      <div className ="follower">
        <h1>{this.state.followers.login}</h1>
         <img src= {this.state.followers.avatar_url}/>
      </div>
    </div>
  );
 }
  }

export default App;
