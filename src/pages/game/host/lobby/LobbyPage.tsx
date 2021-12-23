import React from 'react';
import styles from './LobbyPage.module.scss';
import formatMessage from 'format-message';
import { ReactComponent as KHLogo } from '@/assets/logos/kahoot-logo.svg';
import { ReactComponent as ProfileIcon } from '@/assets/svg/profile-icon.svg';
import KHButton from '@/components/button/KHButton';
import theme from '@/theme.module.scss';

const LobbyPage = () => {
  const listPlayers = ['test', 'marc', 'louis'];

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.topInnerContainer}>
          <div className={styles.topJoinInfoContainer}>{formatMessage('Únete con la app de Kahoot')}</div>

          <div className={styles.topPinContainer}>
            <div className={styles.pinInfoText}>{formatMessage('PIN de juego:')} </div>
            <div className={styles.pinValueText}>{formatMessage('562 4545')} </div>
          </div>
        </div>
      </div>

      <div className={styles.middleContainer}>
        <div className={styles.lightBox}>
          <ProfileIcon className={styles.profileIcon} fill={theme.darkGray} />
          <div className={styles.playersCountText}>{listPlayers.length}</div>
        </div>

        <KHLogo className={styles.logo} fill={theme.primaryColor} />

        <div>
          <KHButton variant="light">{formatMessage('Empezar')}</KHButton>
        </div>
      </div>

      <div className={styles.bottomContainer}>
        {listPlayers.map((player) => {
          return <div className={styles.lightBox}>{player}</div>;
        })}
      </div>
    </div>
  );
};

export default LobbyPage;
