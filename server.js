const express = require('express'),
  app = express(),
  path = require('path'),
  mysql = require('mysql'),
  dbInfo = require(path.join(__dirname, 'secret', 'db.js')),
  dbConnection = mysql.createConnection(dbInfo),
  PORT = 4010;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
