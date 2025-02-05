import { useParams } from "react-router-dom";
import { Book } from "./Book";
import { useNavigate } from "react-router-dom";

import React, { useEffect , useState } from 'react'

function Books({ Search , books , removeBook }) {
  const navigate = useNavigate();
    const { segment } = useParams();
    const [loading , setLoading] = useState(true);
    const [filteredbook , setFilteredbook] = useState([]);
    const Home = () => {
      navigate(`/`)
    }

    useEffect(() => {
     setLoading(true)
      setTimeout(() => {
         const result  = books.filter(
      (item) =>
        item.segment.toLowerCase().includes(segment.toLowerCase()) ||  
        item.title.toLowerCase().includes(segment.toLowerCase()) && 
        item.title.toLowerCase().includes(Search.toLowerCase())
      )
      setFilteredbook(result)
      setLoading(false)
      }, 1000 );
   
    
    } , [segment , Search , books] )
     const [show , setShow] = useState(null);
     const expand = (id) => {
      setShow(show === id ? null : id);
     }
 
  return (
   
    <div className="items-center ">
       
       {filteredbook > 0 && <h1 className="text-white text-center font-serif text-3xl">{segment}</h1>}
      

      
      <div className="flex justify-center flex-wrap h-[40vw]  ">
      { 
        loading ? (
          <div className="flex justify-center items-center text-white min-h-[80vh]">
              <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) :
         filteredbook.length > 0 ? (
      
        filteredbook.map( item => (
                     
            <div className= {`border-2 border-white  text-white  h-fit    m-2 justify-center w-[240px] transition-all duration-300 mt-5 ${show == item.book_id ? "w-[240px] h-[800px]" : ''}`}   key={item.book_id} >
                <img src={item.image} alt={item.title} className="w-screen h-[400px]"/>
                <h2 className="text-center text-ellipsis whitespace-nowrap overflow-hidden">{item.title}</h2>
                <h2  className="text-center font-bold">${item.price}</h2>
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
                <h2  className="text-center justify-end text-blue-500 cursor-pointer " onClick={() => expand(item.book_id)} >{ show === item.book_id ? "Show Less" : "Show More"}</h2>
            </div>
        )
      

        )  ) : ( <div className="flex flex-col items-center min-h-[80vh] justify-center  ">
      <h1 className=" text-white text-4xl font-bold">Oops!! Can't find This  Book</h1>
      <button className="bg-white h-[2vw] w-[200px] cursor-pointer mt-3" onClick={Home}>Return to Home</button>
      </div>
    )
        
}</div>
    </div>
  )
}

export default Books