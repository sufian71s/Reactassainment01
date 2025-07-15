import React from 'react'

function Allocate() {
   const Allcare=[
      {
        id:1, 
        
  hadding:"32%",
  text:"Improvement in Open Rates"
      },
         {
        id:2, 
     
  hadding:"75%",
  text:"Improvement in Ramp Time"
      },
         {
        id:3, 
  
  hadding:"35%",
  text:"Improvement in Meetings Booked."
      },
    ]
  
  return (
    <section className="bg-[url('/public/bg3.png')] bg-cover bg-center text-start bg-no-repeat md:h-[500px] h-[620px]">

      <div className=' text-white md:p-14 p-6 '>
<h1 className=' md:line-clamp-2 line-clamp-3 pb-4  text-[#FFFF]  md:py-1  py-1 text-4xl font-semibold ' >Allocate effort where your reps <br /> make an inpact.</h1>
<h2 className='pb-4 text-4xl text-[#0FF1F6] italic'>Let us handle the rest.</h2>
<p className=' line-clamp-4 text-gray-300 text-[#FFFF] w-80 md:py-4  py-1'>Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p></div>





{/* card section */}
<div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ">{
  Allcare.map((card)=>(
    
     
<div className='flex md:px-14 px-6'>
  <div className='md:w-44   py-1  '>

                <h2 className='md:text-4xl font-bold text-3xl text-[#0FF1F6]   md:pb-2 '>{card.hadding}</h2>
                <p className='text-gray-300 md:text-xl  text-md md:mb-4 text-xl pb-6 '>{card.text}</p>
              </div>
              </div>))}






</div>
    </section>)}

export default Allocate
