const express = require('express');
const app = express();
const port = 3000;

app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
});

app.get('/hello/:name/:lastname', (req, res) => {
    const name = req.params.name;
    const lastname = req.params.lastname;
    res.send(`Hello ${name} ${lastname}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});