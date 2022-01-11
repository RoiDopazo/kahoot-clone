import React, { useState, useEffect, useContext } from 'react';
import { ReactComponent as KHLogo } from '@/assets/logos/kahoot-logo.svg';
import KHBox from '@/components/box/KHBox';
import formatMessage from 'format-message';
import KHTextInput from '@/components/input/KHTextInput';
import KHButton from '@/components/button/KHButton';
import { Link, useNavigate } from 'react-router-dom';
import Routes from '@/router/Routes';
import KHLoading from '@/components/loading/KHLoading';
import { GamePlayerContext } from '@/context/game/GamePlayerContext';
import { UserContext } from '@/context/user/UserContext';
import KHSetupMenu from '@/components/menu/KHSetupMenu';
import { tw } from '@/themes/utils';

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
    <div className={tw('h-screen w-screen', 'flex justify-center items-center', 'bg-primary')}>
      <KHSetupMenu className={tw('absolute top-5 right-5')} />
      {step === STEPS.LOADING && <KHLoading isFullScreen />}
      <div
        className={tw(
          'min-w-[75vmin] min-h-[75vmin]',
          'fixed -bottom-[15vmin] -right-[15vmin]',
          'bg-black opacity-10 rounded-full'
        )}
      />
      <div
        className={tw(
          'min-w-[75vmin] min-h-[75vmin]',
          'fixed -top-[15vmin] -left-[15vmin]',
          'bg-black opacity-10 rotate-45'
        )}
      />
      <div className={tw('max-w-[20rem] w-full', 'flex flex-col justify-center items-center')}>
        <KHLogo className={tw('w-[12.5rem] h-[6.25rem]', 'flex justify-center', 'fill-white')} />
        <KHBox className={tw('w-full z-10')}>
          <div className={tw('mb-2.5')}>
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
          </div>
          <KHButton variant="black" onClick={onPressButton}>
            {step === STEPS.NAME ? formatMessage('¡Listo, vamos!') : formatMessage('Ingresar')}
          </KHButton>
        </KHBox>
      </div>
      {step === STEPS.CODE && (
        <div className={tw('absolute bottom-5', 'flex flex-row', 'text-white text-sm')}>
          {formatMessage('Crea tu propio kahoot en el siguiente')}
          <Link
            to={Routes.LibraryPage}
            className={tw('ml-1', 'cursor-pointer', 'text-white font-bold')}
          >
            {formatMessage('enlace')}
          </Link>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
