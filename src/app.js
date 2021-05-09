const express = require("express");

const app = express();
app.use(express.json());

app.use(require("./routes/auth.routes"));
//app.use(require('./routes/clients.routes'));
//app.use(require('./routes/policies.routes'));

module.exports = app;
