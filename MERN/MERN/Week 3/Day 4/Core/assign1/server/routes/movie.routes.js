const MovieController = require("../controllers/movie.controller");


module.exports = (app) => {
    app.get("/api/movies",MovieController.findAllMovies);
    app.get("/movies/:id",MovieController.findOneMovie);
    app.patch("/api/movies/:id",MovieController.updateExisitingMovie);
    app.post("/api/movies",MovieController.createNewMovie);
    app.delete("/api/movies/:id",MovieController.deleteOneMovie);
};