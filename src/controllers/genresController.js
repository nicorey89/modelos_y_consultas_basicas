const db = require("../database/models");


module.exports = {
    list:(req,res) => {
        db.Genre.findAll()
        .then((genres) => {
            return res.render('genresList',{
                genres
            })
        })
    },
    detail:(req,res)=>{
        const genreId = req.params.id;
        db.Genre.findByPk(genreId)
        .then((genre) => {
            res.render("genresDetail", {genre})
        })
    }
}