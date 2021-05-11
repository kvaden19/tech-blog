// Require dependencies
const express = require('express');

// Import Sequelize connection
const sequelize = require('./config/connection');

// Set up an Express app
const app = express();
const PORT = process.env.PORT || 1001;

// Start server and sequelize connection
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on PORT ' + PORT));
});