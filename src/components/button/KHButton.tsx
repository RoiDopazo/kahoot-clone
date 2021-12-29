import React from 'react';
import cx from 'classnames';
import { tw, VARIANTS_MAP } from '@/themes/utils';

type variantType = 'default' | 'black' | 'success' | 'light';

interface IKHButton {
  variant?: variantType;
  onClick?: (event?: any) => void;
  small?: boolean;
  children: React.ReactNode;
}

const KHButton = ({ variant = 'default', small, children, onClick, ...rest }: IKHButton) => {
  return (
    <button
      className={cx(
        tw(
          'w-full min-w-[48px] min-h-[48px]',
          'py-2 px-4 m0',
          'border-0 rounded cursor-pointer shadow-[0_-6px_rgba(0,0,0,0.15)_inset]',
          'text-sm font-bold text-center leading-normal',
          'hover:mt-0.5 hover:pb-0.5 hover:min-h-[46px] hover:brightness-90',
          VARIANTS_MAP[variant]
        ),
        { [tw('min-h-[32px]')]: small }
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default KHButton;
