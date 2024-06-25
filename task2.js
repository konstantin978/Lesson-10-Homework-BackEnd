process.nextTick(() => {
    console.log('process');
})

Promise.resolve().then(() => {
    console.log('Promise');
})

setImmediate(() => {
    console.log('SetImmediate');
})