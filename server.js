const express = require('express'),
  app = express(),
  path = require('path'),
  mysql = require('mysql'),
  dbInfo = require(path.join(__dirname, 'secret', 'db.js')),
  dbConnection = mysql.createConnection(dbInfo),
  PORT = 4010;

app.get('/api/posts', (req, res) => {
  res.send({ body: 'poooosssts' })
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
