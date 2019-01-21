const fs = require('fs');

fs.rename(
  ".\\content\\mynewfile1.txt",
  ".\\content\\myrenamedfile.txt",
  err => {
    if (err) throw err;
    console.log("File Renamed!");
  }
);