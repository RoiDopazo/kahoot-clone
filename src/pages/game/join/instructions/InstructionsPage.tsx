import React from 'react';
import styles from './InstructionsPage.module.scss';
import formatMessage from 'format-message';

const InstructionsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.topTextContainer}>
          <div className={styles.topTextInnerContainer}>
            <div className={styles.title}>{formatMessage('¡Ya estás dentro del juego!')} </div>
            <div className={styles.subTitle}> {formatMessage('¿Ves tu nombre en la pantalla?')} </div>
          </div>
        </div>
        <div className={styles.topInnerContainer}></div>
      </div>
      <div className={styles.bottomContainer}>test</div>
    </div>
  );
};

export default InstructionsPage;
