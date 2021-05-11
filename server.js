// Require dependencies
const express = require('express');

// Set up an Express app
const app = express();
const PORT = process.env.PORT || 1001;

// Start server
app.listen(PORT, () => console.log('Now listening on PORT ' + PORT));