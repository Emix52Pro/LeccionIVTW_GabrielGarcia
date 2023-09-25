const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
var franquicia_routes = require('./routes/franquiciaRoutes');
app.use('/api', franquicia_routes);
app.listen("3000");
console.log("Servido arriba, iniciado en localhost:3000");