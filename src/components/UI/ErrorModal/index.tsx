import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.module.css';
import Card from '../../UI/Card';
import Button from '../../UI/Button';

type TProps = {
  title: string;
  message: string;
  onConfirm: () => void;
};

type TPropsBackdrop = {
  onConfirm: () => void;
};

type TPropsModalOverlay = {
  title: string;
  message: string;
  onConfirm: () => void;
};

const Backdrop = ({ onConfirm }: TPropsBackdrop) => {
  return <div className={styles.backdrop} onClick={onConfirm} />;
};

const ModalOverlay = ({ title, message, onConfirm }: TPropsModalOverlay) => {
  return (
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
  );
};

const ErrorModal = ({ title, message, onConfirm }: TProps) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root')!
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById('overlay-root')!
      )}
    </>
  );
};

export default ErrorModal;
