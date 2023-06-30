import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setListOfUser(res.data);
        console.log(res)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {listOfUser.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
