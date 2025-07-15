import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Train() {
  return (
    <section className="bg-[url('/public/bg2.png')] bg-cover bg-center md:text-start bg-no-repeat md:h-[450px] px-4 py-12 h-[440px] text-white flex md:justify-center  ">
      

<div>
  <h1 className='md:text-4xl text-3xl font-semibold p-2'>Train your aiDR on your...</h1>
  <h2 className='md:text-4xl text-3xl p-1 italic text-[#0FF1F6] '>prefered email st|</h2>
  <p className='text-xl p-2 py-4'>You’re in control. Train your aiDR on <br /> elements of your Marketing strategy.</p>

<div className='grid md:grid-cols-2 grid-cols-1 items-start justify-start  text-[#0FF1F6] p-2 gap-3 mt-4 '>
  <p> <CheckCircleOutlineIcon/> Quick to ramp </p>
  <p><CheckCircleOutlineIcon/> Easy to optimize</p>
  <p><CheckCircleOutlineIcon/> Quick to scale up</p>
  <p> <CheckCircleOutlineIcon/>Works with all your existing tools</p>
</div>

</div>




    </section>
  )
}

export default Train
