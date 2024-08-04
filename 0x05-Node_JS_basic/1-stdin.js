// Set encoding
process.stdin.setEncoding('utf8');

// Prompt user for their name
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Read user input and print it back
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

// End with a special message
process.on('beforeExit', () => {
  process.stdout.write('This important software is now closing\n');
});
