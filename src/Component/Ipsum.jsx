import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';




function Ipsum({ total = 3, activeIndex = 0 }) {
const slides =[
  {
    id:1,
    hadding:"Qorem ipsum dolor sit amet id of the, consectetur adipiscing elit. Nunc  ",
    hadding1:" vulputate libero et velit interdum, ac aliquet odio mattis.",
    text:"John Doe",
    description:"Chief Strategy Officer @ Company",

  },
    {
    id:2,
    hadding:"It is more time for the work that matters most",
    hadding1:" vulputate libero et velit interdum, ac aliquet odio mattis.",
      text:"Amer gram",
    description:"Chief Strategy Officer @ Company",
 
  },  {
    id:3,
    hadding:"This is more time for the work that matters most",
       hadding1:" vulputate libero et velit interdum, ac aliquet odio mattis.",
      text:"Amer Desh",
    description:"Chief Strategy Officer @ Company",

  },

];


  const [currentIndex,setCurrentIndex]=useState(0);
const prevSlide = ()=>{
  setCurrentIndex((prevIndex)=> (prevIndex === 0 ? slides.length-1 : prevIndex - 1))
}
const NextSlide=()=>{
  setCurrentIndex((prevIndex)=> (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
}
const{hadding,hadding1,text,description} = slides[currentIndex]


  return (
    <section className=' bg-[#002228] max-w-[1400px] md:h-[400px] h-[400px] md:py-20 mt-[-1rem]  px-6 md:px-12 mx-auto '>

<div className='md:mt-[-3rem] p-6 flex text-center justify-center  items-center space-x-4 mt-4 '>
<button  className='bg-[#183A40] p-3 rounded-lg hover:bg-gray-700 transition'>
  <FormatQuoteIcon className='text-[#96ACAF]'/>
</button>
</div>




  <div className='flex  justify-between w-full md"w-1/2'>


<div className=' hidden md:block items-center space-x-4 mt-4'>
  <button onClick={prevSlide} className='bg-[#183A40] p-3 rounded-lg hover:bg-gray-700 transition'>
 <ArrowBackIcon className='text-[#96ACAF]'/>
</button></div>





<div className='text-center font-sans'>
<h1 className=' text-xl    text-white '>{hadding}</h1>
<h1 className=' text-xl pb-4   text-white '>{hadding1}</h1>
<h1 className=' text-xl pb-4   text-[#0FF1F6] '>{text}</h1>
<p className='text-gray-400 mx-sm text-[20px]'>{description}</p></div>




<div className='hidden md:block  items-center space-x-4 mt-4'>
<button  onClick={NextSlide} className='bg-[#183A40] p-3 rounded-lg hover:bg-gray-700 transition'>
  <ArrowForwardIcon className='text-[#96ACAF]'/>
</button>
</div>


  </div >






 <div className="flex justify-center p-8 space-x-2 mt-4">
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          className={`w-3 h-3 rounded-full ${
            index === activeIndex ? 'bg-cyan-400' : 'bg-gray-600'
          }`}
        ></span>
      ))}
    </div>


    </section >




  )
}
export default Ipsum;
