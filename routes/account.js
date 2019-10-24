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
        // build empty object (data), inside data insert user_id from Favorites table
        let data = {};
        data.favMovies = await models.favorites.findAll({
            where: {
                user_id: req.session.user_id,
            }}
        ).then(results => results.map(result => result.dataValues))
        // loop for counter of index, build empty array, input all movie_ids into array, then setting movie_id to variable (idPath), pushing movie_id to 
        favMovieTitlesPromises = [];
        
        data.favMovies.forEach(favMovie => {
            favMovieTitlesPromises.push(models.movies.findOne({ where: { id: favMovie.movie_id }}).then(result => result.dataValues.title));
        })
        
        // wait for all fav movie awaits in for loop to finish
        data.favMovieTitles = await Promise.all(favMovieTitlesPromises)


        // for(var i = 0; i < data.favMovies.length; i++){
        //     let idPath = data.favMovies[i].movie_id
        //     favIds.push(idPath)
        //     data.display = await models.movies.findAll({
        //         where: {
        //             id: idPath,
                
        //         }
        //     })
        //     favTitles.push(data.display[i].title)
        // }
        res.render("account/favorites", data);
    }catch(e){
        console.log(e)
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