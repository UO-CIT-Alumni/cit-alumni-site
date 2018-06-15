const express = require('express'),
  app = express(),
  path = require('path'),
  cors = require('cors'),
  mysql = require('mysql'),
  dbInfo = require(path.join(__dirname, 'secret', 'db.js')),
  PORT = 4010;

dbInfo.connectionLimit = 10;
const dbPool = mysql.createPool(dbInfo);

app.get('/api/posts', cors(), (req, res) => {
  let response;

  dbPool.query('select * from newsletter;', (err, results, fields) => {
    if (err) throw err;
    response = { posts: results };
  });

  res.send(response);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
