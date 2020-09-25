const express = require('./node_modules/express/index');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/ICU-Simulator/dist/ICU-Simulator'));

app.get('/*', function (req, res) {
  res.sendFile(
    path.join(__dirname + '/ICU-Simulator/dist/ICU-Simulator/index.html')
  );
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
console.log('Server Started....');
