const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Use the port of your choice

// Define a sample JSON response
const sampleData = {
  message: 'Hello, this is your API!',
  date: new Date(),
};

// Define a route to respond with JSON data
app.get('/api/data', (req, res) => {
  res.json(sampleData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
