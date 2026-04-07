const dns = require('dns');
dns.setServers(['8.8.8.8']);
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const todoRouter = require('./routes/todoRoute');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI =
  process.env.MONGO_URI ||
  'mongodb://localhost:27017/todo';

app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
);
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message:
      'Todo Backend 서버가 실행 중입니다!',
  });
});

app.use('/todos', todoRouter);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB 연결 성공!');
    app.listen(PORT, () => {
      console.log(
        `서버가 http://localhost:${PORT} 에서 실행 중입니다.`,
      );
    });
  })
  .catch((err) => {
    console.error(
      'MongoDB 연결 실패:',
      err.message,
    );
    process.exit(1);
  });
