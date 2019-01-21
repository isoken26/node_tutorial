const fs = require('fs');

fs.open('.\\content\\mynewfile2.txt', 'w', (err, file) => { 
    if (err) throw err;
    console.log('Saved!');
})