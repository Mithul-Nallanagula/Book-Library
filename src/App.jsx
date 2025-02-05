import NavBar from "./components/NavBar"
import Homepage from "./components/Homepage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from "./components/Books"
import { useState , useEffect } from "react";
import Addbook from "./components/Addbook";
import { Book } from "./components/Book";
import About from "./components/About";

function App() {
  const [search , setSearch] = useState("");
  const [books, setBooks] = useState([]);
   
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
    setBooks(updatedBooks); // Update state after removing the book
  };

  useEffect(() => {
    if (books.length > 0) {
      localStorage.setItem("books", JSON.stringify(books)); // Save to localStorage
    }
  }, [books]);
  
  const addbook = (newbook) => {
     setBooks([...books , newbook]);
  }
   return(
    <>
        <Router>
      <NavBar Search = {setSearch}/>
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Homepage books={books}/>} />
        <Route path="/Books/:segment" element={<Books Search={search} books = {books}  removeBook = {removeBook} />} />
        <Route path="/addbook" element={<Addbook addbook={addbook} />} />
      </Routes>
    </Router>

</>
   )
       
    
}

export default App
