import React, { useContext } from 'react';
import { ReactComponent as KHLogo } from '@/assets/logos/kahoot-logo.svg';
import cx from 'classnames';
import KHListItem from '@/components/list-item/KHListItem';
import { useNavigate } from 'react-router-dom';
import { GameHostContext } from '@/context/game/GameHostContext';
import Routes from '@/router/Routes';
import { tw } from '@/themes/utils';
import formatMessage from 'format-message';

const LibraryPage = () => {
  const navigate = useNavigate();
  const { mutations: gameMutations } = useContext(GameHostContext);

  const items = [
    {
      _id: { $oid: '61c38f555131ea4c20bb5746' },
      name: 'React',
      questions: [
        {
          question: 'Que empresa creo React?',
          choices: [
            { answer: 'Facebook', correct: true },
            { answer: 'Google', correct: false },
            { answer: 'Microsoft', correct: false },
            { answer: 'Amazon', correct: false }
          ],
          points: true,
          pointsMultiplier: 1,
          time: 10000
        },
        {
          question: 'Que lenguaje utiliza React?',
          choices: [
            { answer: 'Java', correct: false },
            { answer: 'JavaScript', correct: true },
            { answer: 'Python', correct: false },
            { answer: 'Android', correct: false }
          ],
          points: true,
          pointsMultiplier: 1,
          time: 10000
        }
      ],
      creator_name: 'roidopazo'
    }
  ];

  const handlePlayKahoot = () => {
    gameMutations.hostNewGame();
    navigate(Routes.Lobby);
  };

  return (
    <>
      <nav
        className={tw(
          'max-h-16 h-14 bg-white',
          'relative flex flex-row items-center',
          'py-0 px-4',
          'shadow-sm z-10',
          'text-white'
        )}
      >
        <KHLogo className="w-24 h-auto mr-10 fill-primary" />
        <div
          className={cx(
            tw(
              'h-14',
              'flex items-center',
              'px0 py-2 m-0 mr-2',
              'no-underline font-bold cursor-pointer text-darkGray',
              'hover:text-primary'
            ),
            {
              [tw(
                'transition border-[0px_3px_3px] border-r-transparent border-l-transparent text-primary'
              )]: true
            }
          )}
        >
          {formatMessage('Biblioteca')}
        </div>
      </nav>
      <div>
        {items.map((kahoot) => {
          return <KHListItem kahoot={kahoot} onPlay={handlePlayKahoot} />;
        })}
      </div>
    </>
  );
};

export default LibraryPage;
