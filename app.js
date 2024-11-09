const express = require('express');
const path = require('node:path');

const app = express();
const PORT = 5001;

app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { message: 'EJS rocks!' });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact-me');
});

app.get('/404', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
