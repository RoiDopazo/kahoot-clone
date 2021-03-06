import Server from 'socket.io-client';
import { KH_SOCKET_SERVER_URL } from '@/environment';

const TIME_TO_WAIT_FOR_CONN = 4000;

export let socket = Server(KH_SOCKET_SERVER_URL as string, { transports: ['websocket'] });

const KHSocketClient = {
  checkConnection: (): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(socket.connected);
      }, TIME_TO_WAIT_FOR_CONN);
    });
  },
  changeServerUrl: ({ socketUrl }) => {
    socket.disconnect();
    socket = Server(socketUrl as string, { transports: ['websocket'] });
  },
  leave: ({ code }) => {
    socket.emit('player-leaves', { code });
  },
  createNewGame: ({ code }) => {
    socket.emit('create-new-game', { code });
  },
  joinGame: ({ code, player }) => {
    socket.emit('player-joins', { code, player });
  },
  onPlayerJoin: (callback) => {
    socket.on('player-joined', callback);
  },
  kickPlayer: ({ code, player }) => {
    socket.emit('kick-player', { code, player });
  },
  onPlayerKicked: ({ callback }) => {
    socket.on('player-kicked', callback);
  }
};

export default KHSocketClient;
