import React, { useContext, useEffect } from 'react';
import styles from './LobbyPage.module.scss';
import formatMessage from 'format-message';
import { ReactComponent as KHLogo } from '@/assets/logos/kahoot-logo.svg';
import { ReactComponent as ProfileIcon } from '@/assets/svg/profile-icon.svg';
import KHButton from '@/components/button/KHButton';
import theme from '@/theme.module.scss';
import { GameContext } from '@/context/game/GameContext';

const LobbyPage = () => {
  const { state: gameState, mutations: gameMutations } = useContext(GameContext);

  useEffect(() => {
    gameMutations.onPlayerJoined();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.topInnerContainer}>
          <div className={styles.topJoinInfoContainer}>{formatMessage('Únete con la app de Kahoot')}</div>

          <div className={styles.topPinContainer}>
            <div className={styles.pinInfoText}>{formatMessage('PIN de juego:')} </div>
            <div className={styles.pinValueText}>{gameState.code} </div>
          </div>
        </div>
      </div>

      <div className={styles.middleContainer}>
        <div className={styles.lightBox}>
          <ProfileIcon className={styles.profileIcon} fill={theme.darkGray} />
          <div className={styles.playersCountText}>{gameState.players.length}</div>
        </div>

        <KHLogo className={styles.logo} fill={theme.primaryColor} />

        <div>
          <KHButton variant="light">{formatMessage('Empezar')}</KHButton>
        </div>
      </div>

      <div className={styles.bottomContainer}>
        {gameState.players.map((player) => {
          return <div className={styles.lightBox}>{player}</div>;
        })}
      </div>
    </div>
  );
};

export default LobbyPage;
