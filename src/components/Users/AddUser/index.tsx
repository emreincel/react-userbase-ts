import React, { useState } from 'react';

import Card from '../../UI/Card';
import Button from '../../UI/Button';
import styles from './styles.module.css';
import IUserModel from './../../../libs/models/user.model';

const AddUser = () => {
  const [enteredUser, setEnteredUser] = useState<IUserModel>({
    username: '',
    age: '',
  });

  const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      enteredUser?.username.trim().length === 0 ||
      enteredUser?.age.trim().length === 0
    ) {
      return;
    }
    if (+enteredUser.age < 1) {
      return;
    }
    console.log('enteredUser', enteredUser);
    setEnteredUser({
      username: '',
      age: '',
    });
  };

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const name = event.target.name;
    const value = event.target.value;
    setEnteredUser({
      ...(enteredUser ?? {}),
      [name]: value,
    });
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          id="username"
          type="text"
          onChange={onChangeHandler}
          value={enteredUser?.username || ''}
        />
        <label htmlFor="age">Age (years)</label>
        <input
          name="age"
          id="age"
          type="text"
          onChange={onChangeHandler}
          value={enteredUser?.age || ''}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
