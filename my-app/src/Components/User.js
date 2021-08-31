import React from 'react';
import UserCard from './UserCard';
import axios from 'axios'

class User extends React.Component {
    state= {
        userinfo: {},
        user:''
    }
    handleChange = e => {
        this.setState({
            ...this.state,
            user: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.user}`)
          .then(res => {
            this.setState({
              userinfo: res.data
            })
          })
      }

    render() {
        return (
            <div className='user'>
                <form>
                    <input type='text' name='user' onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Search the user</button>
                </form>
                <UserCard userinfo={this.state.userinfo}/>
            </div>
        )
    }
}

export default User;