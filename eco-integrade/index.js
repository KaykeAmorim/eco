const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const env = require('./env.json');
const app = express();

const loginRoute = require('./api/modules/login/route');
const registerRoute = require('./api/modules/cadastro/route');
const homeRoute = require('./api/modules/home/route');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use('/images', express.static('images'));
app.use('/js', express.static('js'));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/', loginRoute);
app.use('/', registerRoute);
app.use('/', homeRoute);


app.listen(env.port, () => {
    console.log("Servidor on");
})