import { tw } from '@/themes/utils';
import formatMessage from 'format-message';
import React from 'react';
import KHButton from '../button/KHButton';

interface IKHListItem {
  kahoot: any;
  onPlay?: () => void;
}

const KHListItem: React.FC<IKHListItem> = ({ kahoot, onPlay }) => {
  return (
    <div className={tw('flex flex-col items-center', 'mt-20 ml-40 mr-40 pb-4')}>
      <div
        className={tw(
          'h-12 w-full bg-white',
          'flex items-center justify-between',
          'py-10 px-6 mt-4',
          'shadow-lg box-border'
        )}
      >
        <div className={tw('font-bold')}>{kahoot.name}</div>
        <div className={tw('flex flex-row', '')}>
          <KHButton variant="default" small>
            {formatMessage('Editar')}
          </KHButton>
          <KHButton onClick={onPlay} variant="success" small>
            {formatMessage('Jugar')}
          </KHButton>
        </div>
      </div>
    </div>
  );
};

export default KHListItem;
