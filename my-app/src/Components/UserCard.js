import React from 'react';

class UserCard extends React.Component{
    render() {
        //console.log(`${this.props.userinfo}`)
        return (
            <div className='usercard'>
                <h2>The User Detail:</h2>
                <p>login: {this.props.userinfo.login}</p>
                <p>id: {this.props.userinfo.id}</p>
                <p>email: {this.props.userinfo.email}</p>
            </div>
        )
    }
}

export default UserCard;