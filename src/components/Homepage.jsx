import React, { useState } from 'react'
import Booklist from './booklist'
import Books from './Books'
import { useNavigate } from 'react-router-dom';

function Homepage( {books , removeBook } ) {

   const navigate = useNavigate();

   const clickbook = (segment) => {
    navigate(`books/${segment}`)
    
   }

  return (
    <>
    <h2 className='text-white font-bold mt-[20px] text-4xl ml-3'>Top Rates Books</h2>
    <div className='flex'> <Booklist books={books} removeBook={removeBook} /></div>
     <h2 className='text-white font-bold mt-[20px] text-4xl ml-3'>Genres</h2>
     <div className='flex mt-[20px] overflow-x-auto no-scrollbar  '>
        <div className='m-3 cursor-pointer' onClick={() => clickbook('Funny')} >
            <img src={'https://dryuc24b85zbr.cloudfront.net/tes/resources/12183341/image?width=500&height=500&version=1579196942226'} alt=""  className='w-[16vw] h-[26vw] m-[10px]'/>
        </div>
        <div className='m-2 cursor-pointer' onClick={() => clickbook('Sci-Fi')}>
            <img src={'https://creativeclassroomcore.com/wp-content/uploads/2022/03/Science-Fiction-Intro-Cover-1024x1024.png'} alt="" className='w-[16vw] h-[26vw] m-[10px]'/>
        </div>
        <div className='m-2 cursor-pointer' onClick={() => clickbook('Mystery')}>
            <img src={'https://ecdn.teacherspayteachers.com/thumbitem/Mystery-Genre-Creative-Writing-Short-Story-Analysis-12190623-1727858157/original-12190623-1.jpg'} alt="" className='w-[16vw] h-[26vw] m-[10px]'/>
        </div>
        <div className='m-2 cursor-pointer' onClick={() => clickbook('Fiction')}>
            <img src={'https://c8.alamy.com/comp/KKW0TY/fiction-word-cloud-concept-vector-illustration-KKW0TY.jpg'} alt="" className='w-[16vw] h-[26vw] m-[10px]'/>
        </div>
        <div className='m-2 cursor-pointer ' onClick={() => clickbook('Fantasy')}>
            <img src={'https://m.media-amazon.com/images/I/51DYz02OcoL._AC_UF1000,1000_QL80_.jpg'} alt="" className='w-[16vw] h-[26vw] m-[10px]'/>
        </div>
        <div className='m-2 cursor-pointer' onClick={() => clickbook('Horror')}>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPmRn9QnwPLGWOjvvL-sVC98MR3FronNpRyQ&s'} alt="" className='w-[16vw] h-[26vw] m-[10px]'/>
        </div>
        <div className='m-2 cursor-pointer' onClick={() => clickbook('Romance')}>
            <img src={'https://cdn.kobo.com/book-images/93659c7d-5d79-4b9d-afce-fdaa56d8e81c/353/569/90/False/best-romance-novels.jpg'} alt="" className='w-[16vw] h-[26vw] m-[10px]'/>
        </div>
        <div className='m-2 cursor-pointer' onClick={() => clickbook('Adventure')}>
            <img src={'https://m.media-amazon.com/images/I/51id-3zOa2L._AC_UF1000,1000_QL80_.jpg'} alt="" className='w-[16vw] h-[26vw] m-[10px]'/>
        </div>
     </div>
    </>
  )
}

export default Homepage