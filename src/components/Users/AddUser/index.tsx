import React from 'react';
import Card from '../../UI/Card';
import styles from './styles.module.css';

const AddUser = () => {
  const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (years)</label>
        <input id="age" type="text" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
