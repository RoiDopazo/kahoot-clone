import React, { useContext, useEffect } from 'react';
import formatMessage from 'format-message';
import { ReactComponent as KHLogo } from '@/assets/logos/kahoot-logo.svg';
import { ReactComponent as ProfileIcon } from '@/assets/svg/profile-icon.svg';
import KHButton from '@/components/button/KHButton';
import { GameHostContext } from '@/context/game/GameHostContext';
import { tw } from '@/themes/utils';

const LobbyPage = () => {
  const { state: gameState, mutations: gameMutations } = useContext(GameHostContext);

  useEffect(() => {
    gameMutations.onPlayerJoined();
  }, []);

  const handleKickPlayer = ({ player }) => {
    gameMutations.kickPlayer({ player });
  };

  return (
    <div
      className={tw(
        'h-screen overflow-hidden',
        'flex flex-col',
        'bg-landing_bg bg-center bg-cover bg-no-repeat'
      )}
    >
      <div className={tw('h-48', 'flex justify-center')}>
        <div className={tw('h-32', 'flex flex-row', 'mt-5')}>
          <div
            className={tw(
              'h-full max-w-[18.75rem] bg-white',
              'flex items-center',
              'py-5 px-8 mr-1',
              'drop-shadow-md',
              'text-darkGray text-3xl',
              'lobbyClipPath1'
            )}
          >
            {formatMessage('Únete con la app de Kahoot')}
          </div>

          <div
            className={tw(
              'h-full min-w-[20rem] max-w-[30rem]',
              'flex flex-col items-center',
              'py-4 px-8 -ml-4',
              'rounded bg-white shadow-sm',
              'font-black leading-normal',
              'lobbyClipPath2'
            )}
          >
            <div className={tw('text-2xl font-bold text-darkGray self-baseline')}>
              {formatMessage('PIN de juego:')}{' '}
            </div>
            <div className={tw('text-7xl text-darkGray font-black self-baseline')}>
              {gameState.code}
            </div>
          </div>
        </div>
      </div>

      <div className={tw('h-40', 'flex justify-between items-center', 'm-16')}>
        <div
          className={tw(
            'h-12',
            'flex flex-row items-center',
            'm-2 py-2 px-4',
            'bg-white rounded box-border cursor-pointer',
            'text-darkGray'
          )}
        >
          <ProfileIcon className={tw('w-10 h-auto fill-darkGray')} />
          <div className={tw('text-darkGray font-semibold text-2xl')}>
            {gameState.players.length}
          </div>
        </div>

        <KHLogo className={tw('h-auto w-48 fill-primary')} />

        <div>
          <KHButton variant="light">{formatMessage('Empezar')}</KHButton>
        </div>
      </div>

      <div
        className={tw('flex flex-wrap flex-row justify-center', 'my-5 mx-20', 'overflow-y-scroll')}
      >
        {gameState.players.map((player) => {
          return (
            <div
              className={tw(
                'h-12',
                'flex flex-row items-center',
                'p-8 my-3 mx-14',
                'bg-white rounded box-border cursor-pointer',
                'text-3xl font-semibold',
                'hover:line-through'
              )}
              onClick={() => handleKickPlayer({ player })}
            >
              {player}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LobbyPage;
