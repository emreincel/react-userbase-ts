import React from 'react';

import styles from './styles.module.css';

type TProps = {
  type?: 'submit' | 'reset' | 'button' | undefined;
  children: string;
};

const Button = ({ type, children }: TProps) => {
  return (
    <button className={styles.button} type={type || 'button'}>
      {children}
    </button>
  );
};

export default Button;
