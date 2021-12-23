import React from 'react';
import styles from './KHTextInput.module.scss';

interface IKHTextInput {
  placeholder?: string;
  value: string;
  onChange: (e: any) => void;
  onBlur?: (e: any) => void;
}

const KHTextInput: React.FC<IKHTextInput> = ({ placeholder, value, onBlur, onChange }) => {
  return <input value={value} onChange={onChange} onBlur={onBlur} className={styles.input} placeholder={placeholder} />;
};

export default KHTextInput;
