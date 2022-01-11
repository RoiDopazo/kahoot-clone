import React, { useContext } from 'react';
import formatMessage from 'format-message';
import { UserContext } from '@/context/user/UserContext';
import { tw } from '@/themes/utils';

const InstructionsPage = () => {
  const { state: userState } = useContext(UserContext);

  return (
    <div className={tw('h-screen', 'flex flex-col justify-between')}>
      <div className={tw('flex-1', 'bg-landing_bg bg-no-repeat bg-cover bg-center')}>
        <div
          className={tw('absolute inset-0 z-10 bg-transparent', 'flex justify-center items-center')}
        >
          <div className={tw('flex flex-col', 'mb-20', 'text-white font-bold')}>
            <div className={tw('mb-5', 'text-center text-4xl', 'textShadow')}>
              {formatMessage('¡Ya estás dentro del juego!')}{' '}
            </div>
            <div className={tw('text-center text-xl', 'textShadow')}>
              {' '}
              {formatMessage('¿Ves tu nombre en la pantalla?')}{' '}
            </div>
          </div>
        </div>
        <div className={tw('h-full', 'opacity-25 bg-black')}></div>
      </div>
      <div
        className={tw(
          'h-20',
          'flex justify-start items-center',
          'py-1 px-3',
          'shadow',
          'text-xl font-bold'
        )}
      >
        {userState.user}
      </div>
    </div>
  );
};

export default InstructionsPage;
