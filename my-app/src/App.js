import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ReactDOM from 'react-dom';
import UserCard from './component/userCard';
import Followers from './component/Followers';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        user: [],
        followers: []
      };
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/CodyFlys`)
    .then(response => {
      console.log(response.data)
      this.setState({
        user: response.data
      })
    })

    axios.get('https://api.github.com/users/CodyFlys/followers')
    .then(response => {
      console.log('Followers', response.data)
      this.setState({
        followers: response.data
      })
    })
  }

  render() {
    return (
        <div className="container">
          <UserCard user={this.state.user}/>

          <h1>FOLLOWERS:</h1>
          
          {this.state.followers && this.state.followers.map((item) => {
            return <Followers key={item.id} followers={item} />
          })}
        </div>
    )
  }
}

export default App;
