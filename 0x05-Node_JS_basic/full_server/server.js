const express = require('express');
const routes = require('./routes/index.js');

const app = express();
const port = 1245;

app.locals.filePath = process.argv[2];

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
