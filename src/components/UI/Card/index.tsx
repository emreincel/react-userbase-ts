import React from 'react';
import styles from './styles.module.css';

type TProps = {
  children: JSX.Element;
  className: string;
};

const Card = ({ children, className }: TProps) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

export default Card;
