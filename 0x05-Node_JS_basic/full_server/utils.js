const fs = require('fs');

async function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim().length > 0);
      if (!lines) { return; }

      const headers = lines.shift().split(',');
      const fieldIndex = headers.indexOf('field');
      const firstNameIndex = headers.indexOf('firstname');
      const fields = {};

      lines.forEach((line) => {
        const details = line.split(',');
        const field = details[fieldIndex];
        const firstname = details[firstNameIndex];
        if (!fields[field]) { fields[field] = []; }
        fields[field].push(firstname);
      });

      resolve(fields);
    });
  });
}

module.exports = readDatabase;
