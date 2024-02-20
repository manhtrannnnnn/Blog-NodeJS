const express = require('express');
const path = require('path');
const morgan = require('morgan');
var exphbs  = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))
// Cấu hình template engine
var hbs = exphbs.create({ /* config */ });

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));
console.log(path.join(__dirname, 'resources', 'views'))
// Định nghĩa route
app.get('/', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})


// Khởi động server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
