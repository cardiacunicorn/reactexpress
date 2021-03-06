import React, { Component } from 'react';
import './users.css';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({users}, () => console.log('Users fetched: ', users)));
  }

  render() {
    return (
      <div>
        <h2>User List from Server</h2>
        <ul>
          {this.state.users.map(user =>
          <li key={user.id}>{user.lastName}, {user.firstName}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Users;
