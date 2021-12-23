import React, { useState, useEffect, useContext } from 'react';
import styles from './LandingPage.module.scss';
import { ReactComponent as KHLogo } from '@/assets/logos/kahoot-logo.svg';
import KHBox from '@/components/box/KHBox';
import formatMessage from 'format-message';
import KHTextInput from '@/components/input/KHTextInput';
import KHButton from '@/components/button/KHButton';
import { Link, useNavigate } from 'react-router-dom';
import Routes from '@/router/Routes';
import KHLoading from '@/components/loading/KHLoading';
import theme from '@/theme.module.scss';
import { GamePlayerContext } from '@/context/game/GamePlayerContext';
import { UserContext } from '@/context/user/UserContext';
import KHSetupMenu from '@/components/menu/KHSetupMenu';

enum STEPS {
  CODE = 'code',
  LOADING = 'loading',
  NAME = 'name'
}

const LandingPage = () => {
  const [step, setStep] = useState<STEPS>(STEPS.CODE);
  const [code, setCode] = useState('');
  const [name, setName] = useState('');

  const { mutations: userMutations } = useContext(UserContext);
  const { mutations: gameMutations } = useContext(GamePlayerContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (step === STEPS.LOADING) {
      setTimeout(() => {
        setStep(STEPS.NAME);
      }, 2000);
    }
  }, [step]);

  const onPressButton = () => {
    if (step === STEPS.CODE) {
      return setStep(STEPS.LOADING);
    }
    if (step === STEPS.NAME) {
      userMutations.setUser({ username: name });
      gameMutations.joinGame({ code: parseInt(code, 10), player: name });
      navigate(Routes.Instructions);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <KHSetupMenu className={styles.topRightMenu} />
      {step === STEPS.LOADING && <KHLoading isFullScreen />}
      <div className={styles.squareDiv} />
      <div className={styles.circleDiv} />
      <div className={styles.centerContainer}>
        <KHLogo fill={theme.white} className={styles.logo} />
        <KHBox className={styles.box}>
          {step === STEPS.NAME ? (
            <KHTextInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={formatMessage('Nombre de usuario')}
            />
          ) : (
            <KHTextInput
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder={formatMessage('PIN del juego')}
            />
          )}
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

export default LandingPage;
