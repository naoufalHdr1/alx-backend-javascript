const express = require('express');
const fs = require('fs');

const app = express();

/**
 * Reads a CSV database asynchronously and returns information about students.
 * @param {string} filePath - The path to the database file.
 * @returns {Promise<string>} A promise resolving to formatted student information.
 */
const countStudents = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim().length > 0);
      const headers = lines.shift(); // Remove the header row

      if (!headers) {
        reject(new Error('Empty or invalid file format'));
        return;
      }

      const fields = {};
      lines.forEach((line) => {
        const [firstName, , , field] = line.split(',');
        if (field && firstName) {
          if (!fields[field]) fields[field] = [];
          fields[field].push(firstName);
        }
      });

      const totalStudents = Object.values(fields).reduce(
        (sum, students) => sum + students.length,
        0
      );

      let result = `Number of students: ${totalStudents}\n`;
      for (const [field, names] of Object.entries(fields)) {
        result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      resolve(result.trim());
    });
  });
};

// Define route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define route for the /students endpoint
app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');

  const databaseFile = process.argv[2];
  if (databaseFile) {
    try {
      const result = await countStudents(databaseFile);
      res.end(result);
    } catch (err) {
      res.status(500).end(err.message);
    }
  } else {
    res.end();
  }
});

app.listen(1245);

module.exports = app;
