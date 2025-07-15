import { Description } from '@mui/icons-material'
import React from 'react'
import { ArrowForward } from '@mui/icons-material';

function Control() {
  const Controls=[
      {
        id:1, 
         img:"/public/ph_magic-wand-duotone.png",
  hadding:"You’re in Control",
  text:"aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work."
      },
         {
        id:2, 
        img:"/public/ph2.png",
  hadding:"Infinitely Scalable",
  text:"Train an aiDR on a patch. When you are happy with the results, scale it effortlessly."
      },
         {
        id:3, 
         img:"/public/ph3.png",
  hadding:"Incredibly Flexible",
  text:"Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time."
      },
    ]
  
  return (
    <section className='justify-center items-center mx-auto py-12 px-4 md:px-12 bg-[#002228]'>


{/* card section */}
<div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">{
  Controls.map((card)=>(
    <div key={card.id} className=' rounded-xl overflow-hidden hover:shadow-xl transition duration-300'>
      <img className='flex px-6 items-start ' src={card.img} alt="" />

  <div className='p-6'>
                <h2 className='text-xl md:text-4xl font-semibold  mb-2 text-white md:pb-2 '>{card.hadding}</h2>
                <p className='text-gray-300 md:text-xl  text-sm md:mb-4'>{card.text}</p>
              </div>
    </div>
  ))}

</div>
    </section>)}

export default Control;
