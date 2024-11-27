const readDatabase = require('../utils.js');

class StudentsController {
  static async getAllStudents (req, res) {
    const { filePath } = req.app.locals;

    try {
      const students = await readDatabase(filePath);
      const fields = Object.keys(students).sort((a, b) => a.localeCompare(b));
      let response = 'This is the list of our students\n';

      fields.forEach((field) => {
        response += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      });

      res.status(200).send(response.trim());
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static async getAllStudentsByMajor (req, res) {
    const { filePath } = req.app.locals;
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase(filePath);
      const fieldStudents = students[major];

      if (!fieldStudents) {
        res.status(200).send('List: ');
        return;
      }

      res.status(200).send(`List: ${fieldStudents.join(', ')}`);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

module.exports = StudentsController;
