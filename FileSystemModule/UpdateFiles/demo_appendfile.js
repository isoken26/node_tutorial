const fs = require('fs');

fs.appendFile('.\\content\\mynewfile1.txt', ' This is my new text.', (err) => {
    if (err) throw err;
    console.log('Update!');
});