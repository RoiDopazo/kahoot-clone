import React from 'react';
import { ReactComponent as KHLogo } from '@/assets/logos/kahoot-logo.svg';
import cx from 'classnames';
import theme from '@/theme.module.scss';
import styles from './LibraryPage.module.scss';
import KHListItem from '@/components/list-item/KHListItem';

const LibraryPage = () => {
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

  return (
    <>
      <nav className={styles.navBar}>
        <KHLogo className={styles.logo} fill={theme.primaryColor} />
        <div className={cx(styles.navItem, styles.navItemSelected)}>Biblioteca</div>
      </nav>
      <div>
        {items.map((kahoot) => {
          return <KHListItem kahoot={kahoot} />;
        })}
      </div>
    </>
  );
};

export default LibraryPage;
