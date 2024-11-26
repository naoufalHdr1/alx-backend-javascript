const fs = require('fs').promises;

/**
 * Reads a CSV file asynchronously and counts students based on their fields.
 *
 * @param {string} path - The path to the CSV file.
 * @returns {Promise<void>} A Promise that resolves when the operation is complete.
 *
 * @throws {Error} If the file cannot be read or if there is no valid data in the file.
 */
async function countStudents (path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n');
    const headers = lines[0].split(',');
    const students = lines.slice(1).filter(line => line.trim() !== '');
    console.log(`Number of students: ${students.length}`);

    const fieldIndex = headers.indexOf('field');
    const firstNameIndex = headers.indexOf('firstname');
    const fields = {};

    students.forEach((student) => {
      const details = student.split(',');
      const field = details[fieldIndex];
      const firstname = details[firstNameIndex];

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstname);
    });

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
