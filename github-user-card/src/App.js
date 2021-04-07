import './App.css';
import React from 'react';
import axios from 'axios';
import GithubCard from './GitHubCard';

class App extends React.Component{
  state = {
    users: [],
  }

  componentDidMount(){
    axios.get("https://api.github.com/users/Margarita-Salazar")
    .then(res=> {
      this.setState({
        users: [...this.state.users, res.data]
      })
    })
    axios.get("https://api.github.com/users/Margarita-Salazar/followers")
    .then(res=>{
      res.data.forEach(user=>{
        axios.get(user.url)
        .then(res=>{
          this.setState({
            users: [...this.state.users, res.data]
          })
        })
      })
    })
  }
  render(){
    return(
    <div className="App">
      <header className="App-header">
        <h1>
          Git Hub User Card
        </h1>
      </header>
      <div className="user-container">
        {this.state.users.map(user=>{
          return(<GithubCard key={user.id} user={user}/>)
        })}
      </div>
    </div>
  )}
}

export default App;
