const express = require('express');
const bodyParser = require('body-parser');
const env = require('./env.json');
const app = express();

const loginRoute = require('./api/modules/login/route');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use('/images', express.static('images'));
app.use('/js', express.static('js'));
app.use(bodyParser.json());

app.use('/', loginRoute);



app.listen(env.port, () => {
    console.log("Servidor on");
})