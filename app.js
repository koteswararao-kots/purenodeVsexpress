// Import required modules
const express = require('express');
const fs = require('fs');
const ejs = require('ejs');
const bodyParser = require('body-parser'); // Middleware for parsing POST data

// Create an Express application
const app = express();
app.set('view engine', 'ejs'); // Set EJS as the template engine

// Middleware 1: Logging Middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
    next(); // Continue to the next middleware
});

// Middleware 2: Static Files Middleware
app.use(express.static('public'));

// Middleware 3: Body Parsing Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Comparison 1: HTML Rendering with Express.js (EJS)
app.get('/ejs', (req, res) => {
    const data = {
        title: 'EJS Example',
        greeting: 'Hello, EJS!',
        contactEmail: "kots@gmail.com",
        currentYear: 2023
    };
    res.render('index', data);
});

// Comparison 2: HTML Rendering with Pure Node.js
app.get('/nodejs', (req, res) => {
    fs.readFile('views/index.html', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Internal Server Error');
            return;
        }
        data = data.replace('{{ title }}', 'Pure Node.js Example');
        data = data.replace('{{ greeting }}', 'Hello, Pure Node.js!');
        res.status(200).send(data);
    });
});

// New Route: GET Request with Route Parameter
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    if (userId === 'admin') {
        const error = new Error('Access denied');
        error.status = 403; // Forbidden
        throw error;
    }
    res.send(`User ID: ${userId}`);
});

// New Route: POST Request for Form Submission
app.post('/submit', (req, res) => {
    const formData = req.body;
    if (!formData.email || !formData.message) {
        const error = new Error('Incomplete form data');
        error.status = 400; // Bad Request
        throw error;
    }
    res.send(`Form Submitted: ${JSON.stringify(formData)}`);
});

// Error Handling Routes
app.get('/error/server', (req, res) => {
    throw new Error('Internal Server Error'); //used to throw server related error, any error handling 
                                                //- middle ware identifies it. 
});

app.get('/error/client', (req, res, next) => {
    const error = new Error('Client Error');
    error.status = 400; // Bad Request             //related to client related error, to pass status code                                                         //- objects to the client side.
    next(error);
});

// Middleware 4: Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(`Error: ${err.message}`);
    res.status(err.status || 500).send('Something went wrong');
});

// Start the Express server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
