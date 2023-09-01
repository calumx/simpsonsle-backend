require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
// get MongoDB driver connection
const dbo = require('./db');

const PORT = process.env.PORT || 5000;
const app = express();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

app.use(express.json());
app.use(cors());
app.use(require('./routes'));

// Global error handling
app.use(function (err, _req, res, _next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// perform a database connection when the server starts
dbo.connectToServer(function (err, _req, _res, _next) {
  if (err) {
    console.error(err);
    process.exit();
  }

  // start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
