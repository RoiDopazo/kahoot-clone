// import io from 'socket.io-client';
import Server from 'socket.io-client';

const socket = Server('http://localhost:5555/');

socket.on('room-joined', (data) => {
  console.log('room-joined');
});

socket.on('player-answer', (data) => {
  console.log('player-answer');
});

socket.emit('host-join', { pin: 100 });
