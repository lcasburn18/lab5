// Import the express module to create an Express application
const express = require('express');
const app = express(); // Initialize an Express application
const port = 3000; // Define the port the server will listen on

// Define a route that responds with a personalized greeting based on the URL parameter :name
app.get('/hello/:name', (req, res) => {
    const name = req.params.name; // Extract the 'name' parameter from the URL
    res.send(`Hello ${name}`); // Send a response with the name
});

// Import the body-parser module to parse form data in POST requests
const bodyParser = require('body-parser');
// Use bodyParser middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route that handles GET requests with query parameters
app.get('/name', (req, res) => {
    const firstname = req.query.firstname; // Extract 'firstname' from query parameters
    const lastname = req.query.lastname; // Extract 'lastname' from query parameters
    res.send(`Hello ${firstname} ${lastname}`); // Send a response with the full name
});

// Import the 'path' module to work with file paths
const path = require('path');

// Define a route that serves the 'index.html' file when '/index' is requested
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Serve 'index.html' file from the current directory
});

// Define a route that responds with a personalized greeting using both first name and last name from the URL
app.get('/hello/:name/:lastname', (req, res) => {
    const name = req.params.name; // Extract 'name' from URL parameters
    const lastname = req.params.lastname; // Extract 'lastname' from URL parameters
    res.send(`Hello ${name} ${lastname}`); // Send a response with the full name
});

// Define the root route that sends a welcome message
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying'); // Send a welcome message
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // Log a message when the server is running
});

// Define a route that handles POST requests and retrieves form data from the request body
app.post('/name', (req, res) => {
    const firstname = req.body.firstname; // Extract 'firstname' from the request body
    const lastname = req.body.lastname; // Extract 'lastname' from the request body
    res.send(`Hello ${firstname} ${lastname}`); // Send a response with the full name
});

// Define a route that returns a list of movie objects in JSON format
app.get('/api/movies', (req, res) => {
    const movies = [ // Define an array of movie objects
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

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Error handling middleware that catches any server errors and responds with a 500 status code
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace
    res.status(500).send('Something went wrong!'); // Send a generic error response
});
