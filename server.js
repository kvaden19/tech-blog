// Require dependencies
const path = require('path');
const express = require('express');
// const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
// const helpers = require('./utils/helpers);

// Import Sequelize connection from config folder
const sequelize = require('./config/connection');
// session.Store

// Set up an Express app
const app = express();
const PORT = process.env.PORT || 1001;

// Set up a Handlebars.js engine
const hbs = exphbs.create({});

// Configure Express to work with JSON data in POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure Express to use Handlebars as the template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// Set up and use a session ...

// Start server and database connection via Sequelize
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on PORT ' + PORT));
});