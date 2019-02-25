/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const { getUser, getResturant } = require('./models/modal.js');

app.use(bodyParser.json());

app.get('/user/:userId', (req, res) => {
  getUser(Number(req.params.userId))
    .then((data) => {
      res.status(200);
      res.end(JSON.stringify(data));
    })
    .catch(() => {
      res.sendStatus(404);
    });
});

app.get('/resturant/:resId', (req, res) => {
  getResturant(Number(req.params.resId))
    .then((data) => {
      res.status(200);
      res.end(JSON.stringify(data));
    })
    .catch(() => {
      res.sendStatus(404);
    });
});


app.use(express.static('./public/dist'));
app.listen(port, () => console.log('LISTENING TO ANDRE PORT 3000'));
