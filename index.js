const express = require('express');
const app = express();
const port = 5500;

app.get('/', (req, res) => {
    res.send(`selamat malam`)
});

app.post('/', (req, res) => {
    res.send(`selamat sore`)
});

app.put('/', (req, res) => {
    res.send(`selamat siang`)
});

app.delete('/', (req, res) => {
    res.send(`selamat pagi`)
});

app.listen(port, () => {
    console.log(`Server berjalan pada localhost:${port}`)
});