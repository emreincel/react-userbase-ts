import React, { useState, useRef } from 'react';

import Card from '../../UI/Card';
import Button from '../../UI/Button';
import styles from './styles.module.css';
import IUserModel from './../../../libs/models/user.model';
import { v4 as uuidv4 } from 'uuid';
import ErrorModal from '../../UI/ErrorModal';
import IErrorModel from '../../../libs/models/error.model';

type TProps = {
  onAddUser: (formData: IUserModel) => void;
};

const AddUser = ({ onAddUser }: TProps) => {
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);

  const [enteredUser, setEnteredUser] = useState<IUserModel>({
    username: '',
    age: '',
    id: '',
  });
  const [error, setError] = useState<IErrorModel | null>(null);

  const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredName = usernameInputRef.current?.value;
    const enteredUserAge = ageInputRef.current?.value;

    if (
      enteredName?.trim().length === 0 ||
      enteredUserAge?.trim().length === 0
    ) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (enteredUserAge !== undefined) {
      if (+enteredUserAge < 1) {
        setError({
          title: 'Invalid age',
          message: 'Please enter a valid age (> 0).',
        });
        return;
      }
    }

    onAddUser(enteredUser);
    setEnteredUser({
      username: '',
      age: '',
      id: '',
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
      id: uuidv4(),
    });
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            id="username"
            type="text"
            onChange={onChangeHandler}
            value={enteredUser?.username || ''}
            ref={usernameInputRef}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            name="age"
            id="age"
            type="text"
            onChange={onChangeHandler}
            value={enteredUser?.age || ''}
            ref={ageInputRef}
          />
          <Button onClick={errorHandler} type="submit">
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
