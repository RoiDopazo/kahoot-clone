import React from 'react';
import styles from './KHTextInput.module.scss';

const KHTextInput = ({ placeholder, value, onChange }) => {
  return <input value={value} onChange={onChange} className={styles.input} placeholder={placeholder} />;
};

export default KHTextInput;
