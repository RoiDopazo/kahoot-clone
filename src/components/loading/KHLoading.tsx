import React from 'react';
import styles from './KHLoading.module.scss';
import { ReactComponent as Loader } from '@/assets/svg/loader.svg';

const KHLoading = () => {
  return (
    <span className={styles.loader}>
      <Loader className={styles.logoSvg} />
    </span>
  );
};

export default KHLoading;
