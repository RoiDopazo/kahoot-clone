import React from 'react';
import styles from './KHLoading.module.scss';
import { ReactComponent as Loader } from '@/assets/svg/loader.svg';

const KHLoading = (isFullScreen) => {
  const LoaderComponent = (
    <span className={styles.loader}>
      <Loader className={styles.logoSvg} />
    </span>
  );

  if (isFullScreen) {
    return <div className={styles.loaderContainer}>{LoaderComponent}</div>;
  }

  return LoaderComponent;
};

export default KHLoading;
