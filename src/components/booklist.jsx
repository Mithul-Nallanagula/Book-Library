import React, { useState } from 'react'
import { Book } from './Book'




function Booklist( {books} ) {
  
 
const [show , setShow] = useState(null);
const expand = (id) => {
 setShow(show === id ? null : id);
}
    

  return (
    <>
     {books.filter(item => item.rating > 4.6).map((item , index) => {
        const bookId = item.book_id || `added-${index}`;
        return (


            <div className= {`border-2 border-white  text-white  h-fit    m-2 justify-center w-[240px] transition-all duration-300 mt-5 ${show == bookId ? "w-[240px] h-[800px]" : ''}`}   key={bookId} >
        <img src={item.image} alt={item.title} className='w-screen h-[15vw]' />
        <h2 className='font-bold  text-ellipsis overflow-hidden text-center whitespace-nowrap text-sm'>{item.title}</h2>
       
        <p className=' ml-2 text-center'> {item.segment}</p>
        <div className={` transition-all duration-300 flex flex-col items-center ${  show === item.book_id ? "max-h-[500px] opacity-100 overflow-visible" : "max-h-0 opacity-0 overflow-hidden"}`}>
                {show === item.book_id && <>
                 <p className="font-bold">Rating : {item.rating}⭐️</p>
                 <p className="text-center font-bold">Genre:{item.segment}</p>

                 <p className="text-center">{item.description}</p>
                 <button className="bg-red-500 text-white px-2 py-1 rounded mt-2 cursor-pointer"
                   onClick={() => removeBook(item?.book_id)}
                    > Delete</button>
                 </>}
                
                 

                </div>
                <h2  className="text-center justify-end text-blue-500 cursor-pointer " onClick={() => expand(bookId)} >{ show === item.book_id ? "Show Less" : "Show More"}</h2>
       
       

        </div>
        );
})}
    
    </>
     
  )
}

export default Booklist