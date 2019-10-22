  
const express = require("express");
const models = require("./models");
const app = express();
const bodyParser = require('body-parser');
const session = require("express-session");
const accountRouter = require("./routes/account");

app.use(express.static("public"));
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({extended: false}));
app.use("/account", accountRouter)

app.get('/', function (req, res) {
    res.render("index");
})

app.get('/explore', async (req, res) => {
    let data = {};
    data.movies = await models.movies.findAll();
    res.render("explore", data);
})

app.get('/explore/:title', async (req, res) => {
    let data = {};
    data.movies = await models.movies.findOne({
        where: {title: req.params.title}
    });
    res.render("movie", data);
})


app.get("/account/login", function (req, res) {
    res.render("login");
})

app.listen(3000);