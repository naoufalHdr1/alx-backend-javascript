const fs = require('fs');
const http = require('http');
const url = require('url');

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
        (sum, students) => sum + students.length, 0
      );

      let result = `Number of students: ${totalStudents}\n`;
      for (const [field, names] of Object.entries(fields)) {
        result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      resolve(result.trim());
    });
  });
};

/**
 * HTTP server handling two routes: "/" and "/students".
 */
const app = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);
  const { pathname } = reqUrl;

  if (pathname === '/') {
    // Route: '/'
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (pathname === '/students') {
    // Route: '/students'
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');

    const databasePath = process.argv[2];
    if (databasePath) {
      countStudents(databasePath)
        .then((output) => {
          res.end(output);
        })
        .catch((err) => {
          res.end(err.message);
        });
    } else {
      res.end();
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
