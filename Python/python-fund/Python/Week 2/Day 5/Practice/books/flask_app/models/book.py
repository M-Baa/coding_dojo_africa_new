from ..config.mysqlconnection import connectToMYSQL
from flask_app.models import author


class book:
    def __init__(self,data):
        self.id=data ['id']
        self.title=data['title']
        self.num_of_pages=data['num_of_pages']  
        self.created_at=data['created_at']
        self.updated=data['updated_at']
        self.authors_who_favorited= []

@classmethod
def get_all(cls):
        query = " SELECT * FROM books;"
        books=[]
        results = connectToMYSQL('books').query_db(query)
        for row in results:
            books.append(cls(row))
        return books


@classmethod
def save(cls,data):
        query = "INSERT INTO books (title,num_of_pages) VALUES (%(title)s,%(num_of_pages)s);"
        return connectToMySQL('books').query_db(query,data)
    

@classmethod
def get_by_id(cls,data):
        query =" SELECT * FROM books LEFT JOIN favorites ON books.id = favorites.book_id LEFT JOIN authors ON authors.id = favorites.author_id WHERE books.id = %(id)s;"
        results =connectToMYSQL('books').query_db(query,data)
        book= cls(results[0])

        for row in results:
            if row['authors.id']== None:
                break
            data ={
                "id":row['authors.id'],
                "name":row['name'],
                "created_at":row['created_at'],
                "updated_at":row['updated_at']            
                }
            book.authors_who_favorited.append(author.author(data))
        return book 


@classmethod 
def unfavorited_books(cls,data):
    query = "SELECT * FROM books WHERE books.id NOT IN  (SELECT book_id FROM favorites WHERE author_id = %(id)s);"
    results = connectToMYSQL('books').query_db(query,data)
    books =[]
    for row in results:
        books.append(cls(row))
    print(books)
    return books

