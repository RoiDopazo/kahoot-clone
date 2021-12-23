import { Server } from 'socket.io';
import express from 'express';

const app = express();

const io = new Server(
  app.listen(5555, () => {
    console.log('Connected on port', 5555);
  })
);

//When a connection to server is made from client
io.on('connection', (socket) => {
  // Host Connection
  socket.on('create-new-game', ({ code }) => {
    console.log('code: ', code);
    socket.join(code);
  });
  //Player Join Room
  socket.on('player-joins', async ({ code, player }) => {
    console.log('code: ', code);
    await socket.join(code);
    socket.to(code).emit('player-joined', { player });
  });
  //Add player to Quiz Object
  // socket.on('player-add', (data) => {
  //   socket.to(`${data.selectedPin}`).emit('room-joined', { name: data.nickname, id: socket.id });
  // });

  // socket.on('question-over', (data) => {
  //   socket.to(`${data.pin}`).emit('question-over');
  // });
  // socket.on('next-question', (data) => {
  //   socket.to(`${data.pin}`).emit('next-question');
  // });
  // socket.on('question-answered', (data) => {
  //   socket.to(data.pin).emit('player-answer', { name: data.name, answer: data.answer });
  // });

  // socket.on('sent-info', (data) => {
  //   io.to(data.id).emit('sent-info', { answeredCorrect: data.answeredCorrect, score: data.score });
  // });
});
