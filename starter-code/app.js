// our server is simply configured to return Hello World
// for whatever request that it receives in this case
const express = require('express');

const hostname = 'localhost';
const port = 3000;

// express adds additional functionality
const app = express();

// app.use(express.static('public'));
app.use(express.static(`${__dirname}/public`));


// our first Route:
app.get('/', (request, response, next) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

// about route:
app.get('/about', (request, response, next) => {
  response.sendFile(`${__dirname}/views/about.html`);
});

// gallery route:
app.get('/gallery', (request, response, next) => {
  response.sendFile(`${__dirname}/views/gallery.html`);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
