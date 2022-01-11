import { tw } from '@/themes/utils';
import React from 'react';
import styles from './KHTextInput.module.scss';

interface IKHTextInput {
  placeholder?: string;
  value: string;
  onChange: (e: any) => void;
  onBlur?: (e: any) => void;
}

const KHTextInput: React.FC<IKHTextInput> = ({ placeholder, value, onBlur, onChange }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={tw(
        'h-[3rem] w-full',
        'py-1.5 px-1',
        'box-border rounded outline-none border-2 border-solid border-lightGray text-center',
        'font-bold text-base',
        'placeholder:text-mediumGray',
        'transition',
        'hover:outline-0',
        'focus:border-darkGray focus:outline-darkGray focus:outline-2 focus:outline-offset-[-1px]',
        'focus-visible:outline-offset-0',
        'active:border-darkGray active:outline-0'
      )}
      placeholder={placeholder}
    />
  );
};

export default KHTextInput;
