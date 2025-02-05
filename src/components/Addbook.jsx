import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Addbook( {addbook}) {
    const navigate = useNavigate()
 const [book , setBook] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    segment: "",
    rating: 1,
  })


  if (book.rating > 5) {
    alert("Rating cannot be more than 5.");
    
  }


  const handleChange = (e) => {
    const {name , value} = e.target;
    setBook({...book , [name] : value });
  }
   
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      ...book,
      book_id: Date.now(), 
    };
    console.log("Added Book:", newBook);
    addbook(book)
    navigate("/")
  }
  return (
    <div className="flex flex-col  items-center mt-10">
    <h2 className="text-2xl font-bold mb-4 text-white font-serif">Add a New Book</h2>
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3">
      <input type="text" name="title" placeholder="Title" value={book.title} onChange={handleChange} required className="border p-2 bg-white w-[30vw] h-[50px]" />
      <input type="text" name="description" placeholder="Description" value={book.description} onChange={handleChange} required className="border p-2 bg-white w-[30vw] h-[50px]" />
      <input type="number" name="price" placeholder="Price" value={book.price} onChange={handleChange} required className="border p-2 bg-white w-[30vw] h-[50px]" />
      <input type="text" name="image" placeholder="Image URL" value={book.image} onChange={handleChange} required className="border p-2 bg-white w-[30vw] h-[50px]" />
      <select
      name="segment"
      value={book.segment}
      onChange={handleChange}
      required
      className="bg-white border p-2 w-[30vw] h-[50px]"
    >
      <option value="">Select Category</option>
      <option value="Fiction">Fiction</option>
      <option value="Horror">Horror</option>
      <option value="Sci-Fi">Sci-Fi</option>
      <option value="Fantasy">Fantasy</option>
      <option value="Romance">Romance</option>
      <option value="Adventure">Adventure</option>
      <option value="Mystery">Mystery</option>
      <option value="Funny">Funny</option>
    </select>

    <input
      type="number"
      name="rating"
      value={book.rating}
      onChange={handleChange}
      min="1"
      max="5"
      step={0.1}
      required
      className="bg-white border p-2 w-[30vw] h-[50px]"
    />
      <button type="submit" className="bg-blue-500 text-white p-2 w-[6vw]">Add Book</button>
    </form>
  </div>
)
}

export default Addbook