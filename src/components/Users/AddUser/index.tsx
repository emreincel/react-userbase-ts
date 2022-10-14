import React from 'react';

const AddUser = () => {
  const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age (years)</label>
      <input id="age" type="text" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
