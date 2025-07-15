import React from 'react'
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';

function Hero() {
  return (
    <section className="bg-[url('/bg1.png')] bg-cover bg-center md:text-start text-center bg-no-repeat md:h-[450px] h-[380px]">

      <div className='flex flex-1 text-white md:p-14 p-6 '>
        <div>
<h2 className='text-[#0FF1F6] py-2 '>I Am A Programer (Coder)</h2>

<h1 className=' font-sans  pb-3 md:text-6xl text-4xl'> <span className='font-bold '>More</span> <span className='italic'>leads,</span> <br /> <span className=' font-bold '>less</span>  <span className='italic'>people.</span></h1>

<p className=' line-clamp-4 text-[#FFFF] w-80 md:py-4  py-1'>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized  to every target contact.</p>

<button className='bg-[#0FF1F6] md:px-4 px-12 py-2 mt-6 md:mt-2  md:py-2 text-black rounded-full font-sans font-semibold'> 
  Sign Up the Beta<AirlineStopsIcon />
</button>

        </div>

        <div>

        </div>
      </div>
      
    </section>
  )
}

export default Hero
