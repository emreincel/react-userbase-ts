import React from 'react';

import IUserModel from '../../../libs/models/user.model';
import Card from '../../UI/Card';
import styles from './styles.module.css';

type TProps = {
  users: IUserModel[];
};

const UsersList = ({ users }: TProps) => {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user: IUserModel) => (
          <li key={user.id}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
