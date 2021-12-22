import React from 'react';
import styles from './KHTextInput.module.scss';

const KHTextInput = ({ placeholder }) => {
  return <input className={styles.input} placeholder={placeholder} />;
};

export default KHTextInput;
