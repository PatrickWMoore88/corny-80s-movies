const express = require("express");
const router = express.Router();
const models = require("../models");

function loginRedirect (req, res, next) {
    if (req.session.user_id) {
        res.redirect('/account/dashboard');
    }
    else {
        next();
    }
};

function authenticate (req, res, next) {
    if (!req.session.user_id) {
        res.redirect('/login');
    }
    else {
        next();
    }
};


router.get("/", authenticate, (req, res) => {
    console.log(req.session)
    res.render("account");
});

router.get("/dashboard", authenticate, (req, res) => {
    res.render("account/dashboard");
});

router.get("/favorites", authenticate, async (req, res) => {
    try {
        let data = {};
        console.log("Error")
        data.favMovies = await models.favorites.findAll({
            where: {
                movie_id: req.session.movie_id,
                user_id: req.session.user_id,
            }}
        )
        res.render("account/favorites");
    }catch(e){
        res.send(e)
    }
    
});

router.post("/favorites/add", authenticate, async (req, res) => {
    try {
        await models.favorites.create({
            user_id: req.session.user_id,
            movie_id: req.session.movie_id})
            res.redirect("/account/favorites")
    }catch(e){
        res.send(e)
    }
})

router.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/login");
});

module.exports = router;