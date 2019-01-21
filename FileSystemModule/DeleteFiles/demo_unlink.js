const fs = require('fs');

fs.unlink('.\\content\\mynewfile2.txt', (err) => {
    if (err) throw err;
    console.log('File deleted!');
});