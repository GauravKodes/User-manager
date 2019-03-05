import React, { Component } from 'react';
import User from './User';

class Users extends Component {
  state = {
    users: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Karen Williams',
        email: 'karen@gmail.com',
        phone: '444-444-4444'
      },
      {
        id: 3,
        name: 'Henry Johnson',
        email: 'henry@gmail.com',
        phone: '333-333-333'
      }
    ]
  };

  render() {
    const { users } = this.state;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">User</span> List
        </h1>
        {users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </React.Fragment>
    );
  }
}

export default Users;
