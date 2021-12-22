import React from 'react';
import styles from './KHButton.module.scss';
import cx from 'classnames';
import theme from '@/theme.module.scss';

type variantType = 'default' | 'black' | 'success';

interface IKHButton {
  variant?: variantType;
  onClick?: () => void;
  small?: boolean;
  children: React.ReactNode;
}

const variantColorMapper: Record<variantType, any> = {
  default: theme.buttonDefault,
  black: theme.black,
  success: theme.success
};

const KHButton = ({ variant = 'default', small, children, onClick }: IKHButton) => {
  return (
    <button
      onClick={onClick}
      className={cx(styles.button, { [styles.buttonSmall]: small })}
      style={{ background: variantColorMapper[variant] }}
    >
      {children}
    </button>
  );
};

export default KHButton;
