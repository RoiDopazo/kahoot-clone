import Server from 'socket.io-client';
import { KH_SOCKET_SERVER_URL } from '@/env';

const socket = Server(KH_SOCKET_SERVER_URL as string, { transports: ['websocket'] });

const KHSocketClient = {
  createNewGame: ({ code }) => {
    socket.emit('create-new-game', { code });
  },
  joinGame: ({ code, player }) => {
    socket.emit('player-joins', { code, player });
  },
  onPlayerJoin: (callback) => {
    socket.on('player-joined', callback);
  }
};

export default KHSocketClient;
