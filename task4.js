const fs = require('fs')

fs.readFileSync('file.txt', 'utf-8')
console.log('Sync');
fs.readFile('file2.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data);
})