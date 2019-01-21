const fs = require('fs');

fs.writeFile('.\\content\\mynewfile3.txt', 'Hello content!', (err) => { 
    if (err) throw err;
    console.log('Saved!');
})