const express = require('express')
const app = express();
const port = 3000;
var bodyParser = require('body-parser');

var routes = require('./api/routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/ratings', routes);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))