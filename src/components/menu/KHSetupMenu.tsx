import { Menu } from '@mui/material';
import React, { useState, useContext, useEffect } from 'react';
import { ReactComponent as GearIcon } from '@/assets/svg/gear-outlined-icon.svg';
import KHButton from '@/components/button/KHButton';
import styles from './KHSetupMenu.module.scss';
import KHTextInput from '../input/KHTextInput';
import cx from 'classnames';
import { AppContext } from '@/context/app/AppContext';
import KHSocketClient from '@/services/socket-client/KHSocketClient';

const KHSetupMenu = ({ className }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [status, setStatus] = useState<boolean | undefined>(undefined);
  const [checking, setChecking] = useState<boolean>(true);
  const { state: appState, mutations: appMutations } = useContext(AppContext);

  const open = Boolean(anchorEl);

  useEffect(() => {
    const checkConn = async () => {
      setStatus(await KHSocketClient.checkConnection());
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
    setStatus(await KHSocketClient.checkConnection());
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
        <GearIcon className={styles.gearIcon} />
      </KHButton>
      <Menu id="fade-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        <div className={styles.menuContainer}>
          <div className={styles.menuRowContainer}>
            <KHTextInput
              value={appState.socketUrl}
              onBlur={handleOnBlur}
              onChange={(e) => appMutations.changeSocketUrl({ socketUrl: e.target.value })}
              placeholder="Socket URL"
            />
            <div
              className={cx(styles.reportStatus, {
                [styles.reportStatusOK]: status === true,
                [styles.reportStatusDOWN]: status === false,
                [styles.reportBlinking]: checking
              })}
            />
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default KHSetupMenu;
