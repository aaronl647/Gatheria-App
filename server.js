const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
require('dotenv').config()
const app = express();
var indexRouter = require('./routes/api/index');
const userRouter = require('./routes/api/user');


require('./config/database')

app.use(logger("dev"));
app.use(express.json());

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

//API routes here
//api router
app.use('/', indexRouter);
app.use('/api/users', userRouter);

// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work 
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
