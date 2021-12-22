import React from 'react';
import styles from './KHBox.module.scss';
import cx from 'classnames';

const KHBox = ({ className, children }) => {
  return <div className={cx(styles.boxContainer, className)}>{children}</div>;
};

export default KHBox;
