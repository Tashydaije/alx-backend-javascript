const fs = require('fs');

/**
 * Counts the number of students
 * @param {string} path File path
 */
function countStudents(path) {
  try {
    const studentData = fs.readFileSync(path, { encoding: 'utf8' });
    const students = studentData
      .split('\n')
      .filter((line) => line.trim() !== '')
      .slice(1);

    // Filter out empty or malformed lines
    const validStudents = students.filter((student) => {
      const data = student.split(',');
      return data.length === 4 && data[0].trim() !== '';
    });

    console.log('Number of students:', validStudents.length);

    const courseData = {};
    for (const student of validStudents) {
      const data = student.split(',');
      const course = data[3].trim();
      const firstName = data[0].trim();

      if (!courseData[course]) {
        courseData[course] = [firstName];
      } else {
        courseData[course].push(firstName);
      }
    }

    for (const [key, value] of Object.entries(courseData)) {
      console.log(
        `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`,
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
