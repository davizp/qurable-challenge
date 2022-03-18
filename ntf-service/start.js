const mongoose = require('mongoose');

// Make sure we are running node 14.19.0+
const [major, minor] = process.versions.node.split('.').map(parseFloat);

if (major < 14 && minor < 19) {
  console.log('Use node version 14.19.0 or greater\n ');
  process.exit();
}

// import environmental variables from our variables.env file
require('dotenv').config({ path: '.env.local' });

// // Connect to our Database and handle any bad connections
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// import all of our models
require('./models/Item');

// Start our app!
const app = require('./app');

app.set('port', process.env.PORT || 7777);

const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

process.on('SIGTERM', () => {
  server.close(() => {
    mongoose.connection.close();
    console.log('Mongodb connection closed!');
  });
});
