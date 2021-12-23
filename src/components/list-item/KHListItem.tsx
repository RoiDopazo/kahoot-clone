import React from 'react';
import KHButton from '../button/KHButton';
import styles from './KHListItem.module.scss';

interface IKHListItem {
  kahoot: any;
  onPlay?: () => void;
}

const KHListItem: React.FC<IKHListItem> = ({ kahoot, onPlay }) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.infoContainer}>{kahoot.name}</div>
        <div className={styles.actionsContainer}>
          <KHButton variant="default" small>
            Editar
          </KHButton>
          <KHButton onClick={onPlay} variant="success" small>
            Jugar
          </KHButton>
        </div>
      </div>
    </div>
  );
};

export default KHListItem;
