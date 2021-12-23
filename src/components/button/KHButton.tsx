import React from 'react';
import styles from './KHButton.module.scss';
import cx from 'classnames';
import theme from '@/theme.module.scss';

type variantType = 'default' | 'black' | 'success' | 'light';

interface IKHButton {
  variant?: variantType;
  onClick?: (event?: any) => void;
  small?: boolean;
  children: React.ReactNode;
}

const variantColorMapper: Record<variantType, any> = {
  default: theme.buttonDefault,
  black: theme.black,
  success: theme.success,
  light: theme.white
};

const KHButton = ({ variant = 'default', small, children, onClick, ...rest }: IKHButton) => {
  return (
    <button
      onClick={onClick}
      className={cx(styles.button, { [styles.buttonSmall]: small, [styles.blackText]: variant === 'light' })}
      style={{ background: variantColorMapper[variant] }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default KHButton;
