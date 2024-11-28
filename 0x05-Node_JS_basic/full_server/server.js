const express = require('express');
const routes = require('./routes/index');

const app = express();
const port = 1245;

const [, , filePath] = process.argv;
app.locals.filePath = filePath;

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
