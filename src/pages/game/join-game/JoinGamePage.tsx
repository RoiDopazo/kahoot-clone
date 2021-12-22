import React, { useState, useEffect } from 'react';
import styles from './JoinGamePage.module.scss';
import { ReactComponent as KHLogo } from '@/assets/logos/kahoot-logo.svg';
import KHBox from '@/components/box/KHBox';
import formatMessage from 'format-message';
import KHTextInput from '@/components/input/KHTextInput';
import KHButton from '@/components/button/KHButton';
import { Link } from 'react-router-dom';
import Routes from '@/router/Routes';
import KHLoading from '@/components/loading/KHLoading';
import theme from '@/theme.module.scss';

enum STEPS {
  CODE = 'code',
  LOADING = 'loading',
  NAME = 'name'
}

const JoinGamePage = () => {
  const [step, setStep] = useState<STEPS>(STEPS.CODE);

  useEffect(() => {
    if (step === STEPS.LOADING) {
      setTimeout(() => {
        setStep(STEPS.NAME);
      }, 4000);
    }
  }, [step]);

  const onPressButton = () => {
    if (step === STEPS.CODE) {
      setStep(STEPS.LOADING);
    }
  };

  return (
    <div className={styles.mainContainer}>
      {step === STEPS.LOADING && <KHLoading isFullScreen />}
      <div className={styles.squareDiv} />
      <div className={styles.circleDiv} />
      <div className={styles.centerContainer}>
        <KHLogo fill={theme.white} className={styles.logo} />
        <KHBox className={styles.box}>
          <KHTextInput
            placeholder={step === STEPS.NAME ? formatMessage('Nombre de usuario') : formatMessage('PIN del juego')}
          />
          <KHButton variant="black" onClick={onPressButton}>
            {step === STEPS.NAME ? formatMessage('¡Listo, vamos!') : formatMessage('PIN del juego')}
          </KHButton>
        </KHBox>
      </div>
      {step === STEPS.CODE && (
        <div className={styles.bottomContainer}>
          {formatMessage('Crea tu propio kahoot en el siguiente')}
          <Link to={Routes.LibraryPage} className={styles.createLink}>
            {formatMessage('enlace')}
          </Link>
        </div>
      )}
    </div>
  );
};

export default JoinGamePage;
