import React from 'react'
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';

function Footer() {
  return (
    <section className='bg-[#002228] h-[400px]'>

<div className='text-white text-center p-4 py-12 mt-[-5px]'>
  <span className=' text-2xl  text-[#0FF1F6]'>GET STARTED</span>
  <h1 className='md:text-4xl text-4xl py-4'>Embrace <span className='font-bold   '> the new era of </span> outbound.</h1>
  <p className='mx-auto text-center px-6  justify-center text-gray-300'>Wizia lets train, activate,  optimize aiDRs. <br />
Take your outbound to new levels of performance and efficiency.</p>

<div className=''>
<button className='bg-[#0FF1F6] md:px-8 px-12 py-2  md:mt-8  md:py-1 mt-6  text-black rounded-full font-sans font-semibold'> 
  Sign Up the Beta<AirlineStopsIcon />
</button>
</div>



</div>





<div className='md:flex text-center justify-between text-gray-300 bg-[#07292F] '>


<div className="flex justify-center md:justify-start py-4">
  <img className=' flex md:block md:px-12   px-4 py-2  ' src="/Logo.png" alt="" />
</div>


  <p className='p-4 md:px-12'>Copyright © 2023 Wizia. All rights reserved.</p>
</div>
      
    </section>
  )
}

export default Footer
