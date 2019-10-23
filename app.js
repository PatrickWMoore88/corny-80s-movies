const express = require("express");
const models = require("./models");
const app = express();
const bodyParser = require('body-parser');
const session = require("express-session");
const accountRouter = require("./routes/account");
const bcrypt = require("bcrypt");


app.use(express.static("public"));
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({extended: false}));
app.use(
    session({
        secret: "La li lu le lo",
        resave: false,
        saveUninitialized: true
    })
);
app.use("/account", accountRouter)


app.get('/', function (req, res) {
    res.render("index");
});

app.get('/explore', async (req, res) => {
    let data = {};
    data.movies = await models.movies.findAll();
    res.render("explore", data);
});

app.get('/explore/:title', async (req, res) => {
    let data = {};
    data.movies = await models.movies.findOne({
        where: {title: req.params.title}
    });
    res.render("movie", data);
});

app.get('/registration', function (req, res) {
    res.render('registration');
});

app.post('/registerUser', async (req, res) =>{
    try{
        let registeredUser = await models.users.findOne({where: {username: req.body.username}});
        if (registeredUser) {
            throw new Error("That username has already been taken. Booooo!");
        }
        let encrypted = bcrypt.hashSync(req.body.password, 10)
            models.users.create({
                username: req.body.username,
                password: encrypted})     
    }catch(e){
        res.send(e);
    }
    res.redirect("/login?registeredSuccessfully=true")
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/loginUser", async (req, res)=>{
    try{
        let dbUser = await models.users.findOne({where: {username: req.body.username}});
        if(!dbUser) throw new Error("Get the fuck outta herrreee!");
        bcrypt.compare(req.body.password, dbUser.password, (err, same) =>{
            if(err) throw err;
            if(!same) throw new Error("Nope!");
            req.session.user_id = dbUser.id;
            res.redirect("/account/dashboard");
            })
    }catch(e){
     console.log("hello")
        res.send(e)
    }
});

app.get("/about-us", function (req, res) {
    res.render("about-us");
});

app.get("/contact", function (req, res) {
    res.render("contact");
});

app.post("/account/login", (req, res) => {
    res.redirect("/dashboard");
});

app.listen(3000);