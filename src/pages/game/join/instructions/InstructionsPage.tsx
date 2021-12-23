import React, { useContext } from 'react';
import styles from './InstructionsPage.module.scss';
import formatMessage from 'format-message';
import { UserContext } from '@/context/user/UserContext';

const InstructionsPage = () => {
  const { state: userState } = useContext(UserContext);

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
      <div className={styles.bottomContainer}>{userState.user}</div>
    </div>
  );
};

export default InstructionsPage;
