import React, { useState } from 'react';
import './styles/global.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import IUserModel from './libs/models/user.model';

function App() {
  const [usersList, setUsersList] = useState<IUserModel[]>([]);

  const addUserHandler = (formData: IUserModel) => {
    setUsersList(prev => {
      return [...prev, formData];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
