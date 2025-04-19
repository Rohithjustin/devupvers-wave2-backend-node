const fs = require('fs');

// Step 1: Create and write
fs.writeFile('demo.txt', 'Monisha Node Learning!', (err) => {
  if (err) throw err;
  console.log(' File created!');

  // Step 2: Append
  fs.appendFile('demo.txt', '\nKeep learning!', (err) => {
    if (err) throw err;
    console.log(' Appended!');

    // Step 3: Read
    fs.readFile('demo.txt', 'utf8', (err, data) => {
      if (err) throw err;
      console.log('Final content:\n', data);
    });
  });
});
