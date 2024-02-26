const express = require('express');
const path = require('path');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const methodOverride = require('method-override');
 const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//Connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(methodOverride('_method'));

// Cấu hình template engine
const hbs = exphbs.create({
  helpers: {
    sum: (a, b) => a + b
  }
});

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

// Khởi động server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
