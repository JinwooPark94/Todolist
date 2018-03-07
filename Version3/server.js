// ENV
require('dotenv').config();
// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4500;

// Static File Service
// 정적 파일 제공
app.use(express.static('public'));

// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Node의 native Promise 사용
mongoose.Promise = global.Promise;

// Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, { useMongoClient: true })
// The `useMongoClient` option is no longer necessary in mongoose 5.x, please remove it.
// DB 접속
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

// ROUTERS
app.use('/todos', require('./routes/todos'));

// app.get('/', (req, res) => res.send('Hello World!'));

// Create a model and insert a new doc
// const User = mongoose.model('User', new mongoose.Schema({ name: String }));
// User.create({ name: 'Lee' }).then(doc => console.log(doc));

app.listen(port, () => console.log(`Server listening on port ${port}`));
