import Server from 'socket.io-client';

const socket = Server('http://localhost:5555/', { transports: ['websocket'] });

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
