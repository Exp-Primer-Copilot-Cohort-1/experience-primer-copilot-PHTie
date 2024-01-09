function calculate_numbers(var1, var2) {
    return var1 + var2;
}

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

// Create a connection to the database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database',
});

// API endpoint to receive data from the smart meter
app.post('/meter-data', (req, res) => {
    const data = req.body;

    // Parse the data and extract relevant information
    const { meterId, reading } = data;

    // Store the data in the database
    const query = 'INSERT INTO meter_readings (meter_id, reading) VALUES (?, ?)';
    db.query(query, [meterId, reading], (error, results) => {
        if (error) {
            console.error('Error storing data:', error);
            res.status(500).json({ error: 'Failed to store data' });
        } else {
            res.json({ message: 'Data stored successfully' });
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
