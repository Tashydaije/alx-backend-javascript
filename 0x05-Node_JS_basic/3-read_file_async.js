const fs = require('fs');

/**
 * Counts the number of students asynchronously
 * @param {string} path File path
 * @returns {Promise} Promise that resolves when done
 */

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      let response = '';
      const courseData = {};
      const students = data.split('\n').slice(1);

      // Filter out empty or malformed lines
      const validStudents = students.filter((student) => {
        const fields = student.split(',');
        return fields.length === 4 && fields[0].trim() !== '';
      });

      response += `Number of students: ${validStudents.length}\n`;

      for (const student of validStudents) {
        const fields = student.split(',');
        const course = fields[3].trim();
        const firstName = fields[0].trim();

        if (!courseData[course]) {
          courseData[course] = [firstName];
        } else {
          courseData[course].push(firstName);
        }
      }

      for (const [key, value] of Object.entries(courseData)) {
        response += `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}\n`;
      }

      response = response.trim(); // Remove the last newline character
      console.log(response);
      resolve(response);
    });
  });
}

module.exports = countStudents;
