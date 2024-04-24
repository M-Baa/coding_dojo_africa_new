const AuthorController = require('../controllers/author.controllers');

module.exports=(app)=>{
    app.get('/api/authors',AuthorController.findALL);
    app.post('/api/authors/new',AuthorController.create);
    app.patch('/api/authors/:id',AuthorController.update);
    app.get('/api/authors/:id',AuthorController.getOne);
    app.delete('/api/authors/delete/:id',AuthorController.delete);

}