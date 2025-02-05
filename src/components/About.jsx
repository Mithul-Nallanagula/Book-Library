import React from 'react'

function About() {
  return (
   <>
   <div className='w-screen h-[87vh] flex justify-center items-center'>
   <div className='flex items-center  flex-col   border-2 border-white w-[60vw] h-[70vh] rounded-2xl bg-amber-50'>
    <h1 className='font-bold text-4xl'>About Me</h1>
    <p className='text-2xl text-justify mt-6'>Hi, I’m N. Mithul Sai, the creator of this Book Library. As a passionate reader and full-stack developer, I built this platform to make discovering and organizing books easier for everyone. I believe that books have the power to inspire, educate, and transport us to new worlds. Through this website, I aim to provide a seamless experience for book lovers to explore various genres, add new books, and enjoy the magic of reading. Feel free to browse, add your favorites, and dive into endless literary adventures!”</p>
    <h1 className='font-bold text-3xl mt-7'>Thank You For Visiting!!</h1>
   </div>
   
   </div>
   </>
  )
}

export default About