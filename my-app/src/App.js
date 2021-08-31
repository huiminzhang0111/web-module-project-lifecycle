import React from 'react';
import './App.css';
import User from './Components/User';
import axios from 'axios'

class App extends React.Component {
  state = {
    userinfo: {},
    user: ''
  }

  // componentDidMount() {
  //   axios.get('https://api.github.com/users/huiminzhang')
  //       .then(res => {
  //           this.setState({
  //             ...this.state,
  //             user: res.data.login
  //           })
  //       }).catch(err=> {
  //           console.log(err);
  //       })
  // }

  // handleSubmit = e => {
  //   e.preventDefault();
  //   axios.get(`https://api.github.com/users/${this.state.user}`)
  //     .then(res => {
  //       this.setState({
  //         userinfo: res.data
  //       })
  //     })
  // }

  render() {
    return (
    <div className="App">
      <h1>React Github User Card</h1>
      <User />
      {/* handleSubmit={this.handleSubmit} userinfo={this.state.userinfo} user={this.state.user} */}
    </div>
  );
  }
}

export default App;
