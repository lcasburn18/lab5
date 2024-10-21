const express = require('express');
const app = express();
const port = 3000;

app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
});

const path = require('path');

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
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

app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    // Add status code 201 (Created) and send the movie data as JSON
    res.status(201).json({ movies });
});

app.use(express.static('public'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});