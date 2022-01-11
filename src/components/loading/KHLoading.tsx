import React from 'react';
import { ReactComponent as Loader } from '@/assets/svg/loader.svg';
import { tw } from '@/themes/utils';

const KHLoading = (isFullScreen) => {
  const LoaderComponent = (
    <span
      className={tw(
        'w-16 h-16',
        'flex shrink flex-row items-center justify-center',
        'z-50 align-middle',
        'animate-loading'
      )}
    >
      <Loader className={tw('-mt-6 w-16 h-16')} />
    </span>
  );

  if (isFullScreen) {
    return (
      <div
        className={tw(
          'fixed bg-[rgba(0,0,0,0.7)]',
          'flex flex-col items-center justify-center',
          'z-50 inset-0'
        )}
      >
        {LoaderComponent}
      </div>
    );
  }

  return LoaderComponent;
};

export default KHLoading;
