const fs = require('fs');

fs.appendFile('.\\content\\mynewfile1.txt', 'Hello content', (err) => {
    if (err) throw err;
    console.log('Saved!');
});