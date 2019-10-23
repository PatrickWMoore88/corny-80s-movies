const express = require("express");
const router = express.Router();
const models = require("../models");

function authenticate(req, res, next){
    if(!req.session.user_id){
        res.redirect("/login");
    }else{
        next();
    }
}

router.get("/", async (req,res) =>{
    let data = {};
    data.movies = await models.movies.findAll();
    res.render("explore", data)
});

router.get("/:title", async (req,res) =>{
    let data = {};
    data.movies = await models.movies.findOne();
    res.render("movie", data)
});

// router.get('/:title', async (req, res) => {
//     console.log("FROGSSZZZZZZ")
//     console.log(req.params.title)
//     let movies = {};
//     // movies.movieId = await 
//     models.movies.findOne({
//         where: {title: req.params.title}
//     }).then((result) => {
//         console.log("FROGZ 2: THE FROGANING" + result)
//         movies.stuff = result
//         console.log(movies)
//     })
//     res.render("movie", movies);
// });

module.exports = router;