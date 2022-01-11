import { Menu } from '@mui/material';
import React, { useState, useContext, useEffect } from 'react';
import { ReactComponent as GearIcon } from '@/assets/svg/gear-outlined-icon.svg';
import KHButton from '@/components/button/KHButton';
import KHTextInput from '../input/KHTextInput';
import cx from 'classnames';
import { AppContext } from '@/context/app/AppContext';
import KHSocketClient from '@/services/socket-client/KHSocketClient';

const KHSetupMenu = ({ className }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOK, setIsOK] = useState<boolean | undefined>(undefined);
  const [checking, setChecking] = useState<boolean>(true);
  const { state: appState, mutations: appMutations } = useContext(AppContext);

  const open = Boolean(anchorEl);

  useEffect(() => {
    const checkConn = async () => {
      setIsOK(await KHSocketClient.checkConnection());
      setChecking(false);
    };

    checkConn();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOnBlur = async () => {
    setChecking(true);
    KHSocketClient.changeServerUrl({ socketUrl: appState.socketUrl });
    setIsOK(await KHSocketClient.checkConnection());
    setChecking(false);
  };

  return (
    <div className={className}>
      <KHButton
        variant="light"
        aria-controls="fade-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <GearIcon className={'h-6 w-auto'} />
      </KHButton>
      <Menu id="fade-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        <div className="bg-white p-5">
          <div className="flex justify-between items-center">
            <KHTextInput
              value={appState.socketUrl}
              onBlur={handleOnBlur}
              onChange={(e) => appMutations.changeSocketUrl({ socketUrl: e.target.value })}
              placeholder="Socket URL"
            />
            <div
              className={cx('w-6 h-5 rounded-lg bg-warning ml-5', {
                'bg-success': isOK === true,
                'bg-error': isOK === false,
                'animate-ping': checking
              })}
            />
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default KHSetupMenu;
