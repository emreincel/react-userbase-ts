import React from 'react';

import styles from './styles.module.css';
import Card from '../../UI/Card';
import Button from '../../UI/Button';

type TProps = {
  title: string;
  message: string;
  onConfirm: () => void;
};

const ErrorModal = ({ title, message, onConfirm }: TProps) => {
  return (
    <>
      <div className={styles.backdrop} onClick={onConfirm} />
      <Card className={styles.modal}>
        <div>
          <header className={styles.header}>
            <h2>{title}</h2>
          </header>
          <div className={styles.content}>
            <p>{message}</p>
          </div>
          <footer className={styles.actions}>
            <Button onClick={onConfirm}>Okay</Button>
          </footer>
        </div>
      </Card>
    </>
  );
};

export default ErrorModal;
