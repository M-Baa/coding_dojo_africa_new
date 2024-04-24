import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import showOne from './components/showOne';

function App() {
    const [title,setTitle]=useState("")
    const [author,setAuthor]=useState("")
    const  [allBooks,setAllBooks]=useState([])
    const addBook =(e)=>{
      e.preventDefault()
      const newBook={
        title:title,
        author:author

      }
      setAllBooks([...allBooks,newBook])
      setTitle("")
      setAuthor("")
      // setSubmitted(true)
    }
        return (
          <div className="App">
            <h1>book store</h1>
          <form onSubmit={(e)=> addBook(e)}>
          <h3>add a new book :  </h3>
          <label htmlFor=''>title</label>
          <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
          <label htmlFor='author'></label>
          <input type="text" onChange={(e)=>setAuthor(e.target.value)} value={author}/>
          <button type="submit">Submit</button>
          <p>
            {/* {submitted?<>submitted</>:<></>} */}
          </p>
            </form>
          
          <div>
          Current title :{title}
          Current author: {author}
          </div>
          <div>
            {allBooks.map((b,i)=> <showOne b={b} /> )}
          </div>
          </div>
          );
        }

export default App;
