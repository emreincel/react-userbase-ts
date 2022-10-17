import React from 'react';

import styles from './styles.module.css';
import Card from '../../UI/Card';
import Button from '../../UI/Button';

type TProps = {
  title: string;
  message: string;
};

const ErrorModal = ({ title, message }: TProps) => {
  return (
    <>
      <div className={styles.backdrop} />
      <Card className={styles.modal}>
        <div>
          <header className={styles.header}>
            <h2>{title}</h2>
          </header>
          <div className={styles.content}>
            <p>{message}</p>
          </div>
          <footer className={styles.actions}>
            <Button>Okay</Button>
          </footer>
        </div>
      </Card>
    </>
  );
};

export default ErrorModal;
