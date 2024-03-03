from flask_app import app
from flask import redirect,render_template,request
from ..models.author import author
from ..models.book import book

@app.route('/')
def index():
    return redirect ('/authors')


@app.route('/authors')
def authors():
    return render_template('authors.html',all_authors=author.get.all())


@app.route('/create/author',methods=['POST'])
def create_author():
    data={
        "name" :request.form['name']
    }
    author_id =author.save(data)
    return redirect ('/authors')

@app.route('/author/<int:id>')
def show_author(id):
    data ={
        "id":id
    }
    return 
render_template('show_author.html',author.get_by_id(data),unfavorited_books=book.unfavorited_books(data))


@app.route('/join/book',methods=['POST'])
def join_book():
    data ={
        'author_id':request.form['author_id'],
        'book_id':request.form['book_id']
        }
    
    author.add_favorite(data)
    return redirect(f"/author/{request.form['author_id']}")