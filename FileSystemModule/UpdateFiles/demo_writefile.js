const fs = require('fs');

fs.writeFile('.\\content\\mynewfile3.txt', 'This is my text', (err) => {
    if (err) throw err;
    console.log('Replaced!');
});