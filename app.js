const express = require('express');
const path = require('path');
const app = express();

// Set view engine
app.set('views', path.join(__dirname, 'app_server', 'controllers', 'models', 'views'));

app.set('view engine', 'pug'); // or 'pug' if using pug

// Static filesnpm 
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
