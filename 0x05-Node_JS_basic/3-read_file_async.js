const fs = require('fs');

/**
 * Counts the number of students asynchronously
 * @param {string} path File path
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) reject(new Error('Cannot load the database'));
      if (data) {
        let response = '';
        const courseData = {};
        const students = data.split('\n').slice(1);
        response += `Number of students: ${students.length}\n`;
        for (const student of students) {
          const data = student.split(',');
          const course = data[3];
          const firstName = data[0];
          if (!Object.keys(courseData).includes(course)) {
            courseData[course] = [firstName];
          } else {
            courseData[course].push(firstName);
          }
        }
        for (const [key, value] of Object.entries(courseData)) {
          response += `Number of students in ${key}: ${
            value.length
          }. List: ${value.join(', ')}\n`;
        }
        response = response.substring(0, response.length - 1);
        console.log(response);
        resolve(response);
      }
    });
  });
}

module.exports = countStudents;
