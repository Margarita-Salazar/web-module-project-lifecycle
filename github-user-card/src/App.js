import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component{
  state = {
    user: {}
  }
  componentDidMount(){
    axios.get("https://api.github.com/users/Margarita-Salazar")
    .then(res=>{
      this.setState({
        user: res.data
      })
    })
    .catch(err=>{
      console.log(err.response)
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
        <h2>{this.state.user.name}</h2>
      </div>
    </div>
  )}
}

export default App;
