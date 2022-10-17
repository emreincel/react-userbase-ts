import React from 'react';

import styles from './styles.module.css';

type TProps = {
  type?: 'submit' | 'reset' | 'button' | undefined;
  children: string;
  onClick: () => void;
};

const Button = ({ type, children, onClick }: TProps) => {
  return (
    <button onClick={onClick} className={styles.button} type={type || 'button'}>
      {children}
    </button>
  );
};

export default Button;
