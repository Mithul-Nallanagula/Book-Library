import NavBar from "./components/NavBar"
import Homepage from "./components/Homepage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from "./components/Books"
import { useState , useEffect } from "react";
import Addbook from "./components/Addbook";
import { Book } from "./components/Book";
import About from "./components/About";
import Notfound from "./components/Notfound";

function App() {
  const [search , setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [load , setLoad] = useState(true);

  useEffect (() => {
    setTimeout(() => {
      setLoad(false)
    }, 2000);
  } ,[])
   
  useEffect(() => {
    const save = JSON.parse(localStorage.getItem("books"));
    if(save){
      setBooks(save);

    }else{
      setBooks(Book)
    }

    
  } ,[])
  const removeBook = (bookId) => {
    const updatedBooks = books.filter((book) => book.book_id !== bookId);
    setBooks(updatedBooks);
  };

  useEffect(() => {
    if (books.length > 0) {
      localStorage.setItem("books", JSON.stringify(books)); 
    }
  }, [books]);
  
  const addbook = (newbook) => {
     setBooks([...books , newbook]);
  }
   return(
    <>
        <Router>
      <NavBar Search = {setSearch}/>
      {load ? (   <div className="flex items-center justify-center h-screen bg-black">
            <div className="w-16 h-16 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
          </div>) :
      (<Routes>
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Homepage books={books} removeBook={removeBook}/>} />
        <Route path="/Books/:segment" element={<Books Search={search} books = {books}  removeBook = {removeBook} />} />
        <Route path="/:segment" element={<Books Search={search} books = {books}  removeBook = {removeBook} />} />
        <Route path="/addbook" element={<Addbook addbook={addbook} />} />
        <Route path="*"  element={<Notfound />} />

      </Routes>
        )}
    </Router>

</>
   )
       
    
}

export default App
