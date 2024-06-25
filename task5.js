const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});

app.get('/about', (req, res) => {
    res.send('Welcome to the About page')
})

app.post('/data', (req, res) => {
    const data = req.body;
    const newData = JSON.stringify(data, null, 2)
    fs.writeFileSync('data.txt', newData)


    res.send('Data saved successfully!');
})

app.listen(port, () => console.log('Server running on 3000'))