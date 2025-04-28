const express = require('express');

// Creating instance for express
const app = express();

// Configuring port
const port = 8080;

app.listen(port, () => {
    console.log(`Health check done Aramco Nerve Backend Server listening at Port ${port}`)
}).on("error", (err) => {
    console.error('Error Starting the Server:', err);
});