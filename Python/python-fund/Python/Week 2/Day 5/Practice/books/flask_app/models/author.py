from ..config.mysqlconnection import connectToMySQL
from flask_app.models import book

class  author:
    def __init__(self,data):
        self.id=data['id']
        self.name=data['name']
        self.favorite_book=data['']
        self.created_at=data['created_at']
        self.updated_at=data['updated_at']
        self.favorite_books=[]


@classmethod 
def get_all(cls):
    query = "SELECT *  FROM authors;"
    authors =[]
    results = connectToMySQL('books').query_db(query)
    for row in results:
        authors.append(cls(row))
    return authors

@classmethod 
def save(cls,data):
    query ="INSERT INTO authors (name) VALUES (%(name)s);"
    return connectToMySQL('books').query_db(query,data)

@classmethod 
def unfavorited_authors(cls,data):
    query = "SELECT * FROM authors WHERE authors.id NOT IN ( SELECT  author_id FROM favorites WHERE book_id = %(ids)s);"
    authors=[]
    results = connectToMySQL('books').query_db(query,data)
    for row in results:
        authors.append(cls(row))
    return authors


@classmethod
def add_favorite(cls,data):
    query=" INSERT INTO favorites (author_id,book_id) VALUES (%(author_id)s,%(bppk_id)s);"
    return connectToMySQL('books').query_db(query,data);

@classmethod
def get_by_id(cls,data):
    query ="SELECT * FROM authors LEFT JOIN favorites ON authors.id = favorites.author_id LEFT JOIN books ON books.id = favorites.book_id WHERE authors.id =%(id)s;"
    results = connectToMySQL('books').query_db(query,data)

    author = cls(results[0])
    for row in results:
        if row['book.id']== None:
            break 
        data ={
            "id":row['book.id'],
            "title":row['title'],
            "num_of_pages":row['num_of_pages'],
            "created_at":row['created_at'],
            "updated":row['updated_at']
            }
        author.favorite_books.append(book.book(data))
        return author
        