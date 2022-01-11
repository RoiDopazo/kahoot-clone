import React from 'react';
import cx from 'classnames';
import { tw } from '@/themes/utils';

const KHBox = ({ className, children }) => {
  return (
    <div
      className={cx(tw('bg-white', 'p-4', 'rounded', 'shadow-sm'), className)}
    >
      {children}
    </div>
  );
};

export default KHBox;
