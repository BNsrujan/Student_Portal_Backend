const express = require('express');
const bodyParser = require('body-parser');
const registerRoute = require('./routes/register');

const app = express();
app.use(bodyParser.json());  // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

// Register route
app.use('/register', registerRoute);

// Start the server
const PORT = process.env.PORT || 8090;  // Set your custom port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
