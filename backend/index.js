// src/app.js
import express from 'express';
const PORT = 7500;

const app = express();

// Define a constant for the message
const greeting = "Hi my name is Hamza";

// Define the route
app.get("/", (req, res) => {
    console.log(greeting);
});




app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
