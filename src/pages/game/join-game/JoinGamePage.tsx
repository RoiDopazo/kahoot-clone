import React from 'react';
import styles from './JoinGamePage.module.scss';
import { ReactComponent as KHLogo } from '@/assets/logos/kahoot-logo.svg';
import KHBox from '@/components/box/KHBox';
import formatMessage from 'format-message';
import KHTextInput from '@/components/input/KHTextInput';
import KHButton from '@/components/button/KHButton';
import { Link } from 'react-router-dom';
import Routes from '@/router/Routes';

const JoinGamePage = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.squareDiv} />
      <div className={styles.circleDiv} />
      <div className={styles.centerContainer}>
        <KHLogo className={styles.logo} />
        <KHBox className={styles.box}>
          <KHTextInput placeholder={formatMessage('PIN del juego')} />
          <KHButton>{formatMessage('Ingresar')}</KHButton>
        </KHBox>
      </div>
      <div className={styles.bottomContainer}>
        {formatMessage('Crea tu propio kahoot en el siguiente')}
        <Link to={Routes.CreateKahoot} className={styles.createLink}>
          {formatMessage('enlace')}
        </Link>
      </div>
    </div>
  );
};

export default JoinGamePage;
