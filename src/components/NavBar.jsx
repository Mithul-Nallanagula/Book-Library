import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


function NavBar({ Search }) {
    const [input , setInput] = useState("");
    const navigate = useNavigate();
   
   
     const handleclick = () => {
       
      if(input.trim() == ''){
        navigate(`/`)
      }else{
       const searchQuery = input;
   
       navigate(`/Books/${searchQuery}`)
       setInput('')
         }
        }

     const Home = () => {
      Search("")
      navigate(`/`)
     }
    
     

    return(

    
    <div className="w-screen h-[80px] border-3  flex items-center justify-between " >
      <i className="ri-book-2-line text-white text-6xl "></i>
       
       <div>
      <input type="text"  className="bg-white w-[23vw] h-[40px] text-center outline-none  " value={input} placeholder="Browse Any Book" onChange={(e) => setInput(e.target.value)}/>
      <button className="bg-white w-[90px] text-black  h-[40px]  outline-none cursor-pointer " onClick={handleclick}><i className="ri-search-fill "></i></button>
      
      </div>

      <div className="flex text-white ">
        <h3 className="m-3 cursor-pointer" onClick={Home} >Home</h3>
   
        <h3 className="m-3 cursor-pointer" onClick={() => navigate("/addbook")}>Add book</h3>
        <h3 className="m-3 cursor-pointer" onClick={() => navigate("/About")}>About</h3>
      </div>
    </div>
    )
}

export default NavBar