const fs = require('node:fs')

fs.readFile('file.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err)
    }
    console.log(data);
})

setImmediate(() => {
    console.log('SetImmediate');
})

setTimeout(() => {
    console.log('SetTimeout');
}, 100);

process.nextTick(() => {
    console.log('Process');
})