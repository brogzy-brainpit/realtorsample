import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import CountUp from 'react-countup';


function OurNumbers() {
  return (
    <div className='w-full px-4 py-[10vh] breaker container mx-auto g-white'>
<div className=' breaker-child flex flex-3 font-custom text-footer pb-6 text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out'>
  Our Numbers Do the Talking for Us
</div>

     <div className='breaker-child flex-1'>
       <div className=' px-2 breaker flex flex-col  w-full bged-400 justify-center items-center gap-0' >
<div className='breaker-chil flex w-full justify-betwee'>
  <div className='bg-green-30 p-2 border  border-b-0 border-brand-text dark:border-brand-text-dark transition-all duration-500 flex justify-center items-center flex-col flex-1'>
 <h2 className='font-custom text-footer leading-[1]  text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out'>
 <CountUp end={541} decimals={0} suffix="+" delay={3000} enableScrollSpy  duration={2} />
  </h2>
 <p className='text-par font-normal text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out'>Satisfied Clients</p>
</div>
<div className='bg-green-30 p-2 border border-b-0 border-l-0 border-brand-text dark:border-brand-text-dark transition-all duration-500 flex justify-center items-center flex-col'>
<h2 className='font-custom text-footer leading-[1]  text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out '>
 <CountUp end={35} decimals={0} suffix="M +" delay={3000} enableScrollSpy  duration={2} />
  </h2>
 <p className='text-par font-normal text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out'>Revenue generated</p>
</div>
</div>


<div className='breaker-chil flex w-full justify-between'>
  <div className='bg-green-30 p-2  border-r-0 border border-brand-text dark:border-brand-text-dark transition-all duration-500 flex justify-center items-center flex-col'>
 <h2 className='font-custom text-footer leading-[1]  text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out'>
 <CountUp end={35} decimals={0} suffix="%" delay={3000} enableScrollSpy  duration={2} />
  </h2>
 <p className='text-par font-normal text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out'>Conversion Rate</p>
</div>
<div className='bg-green-30 p-2 border border-brand-text dark:border-brand-text-dark transition-all duration-500 flex justify-center items-center flex-col flex-1'>
<h2 className='font-custom text-footer leading-[1]  text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out'>
 <CountUp end={390}  suffix="" delay={3000} enableScrollSpy  duration={2} />
  </h2>
 <p className='text-par font-normal text-brand-text dark:text-brand-text-dark transition-all duration-500 ease-in-out'>Reviews Rated</p>
</div>
</div>
      </div>

     </div>

    </div>
  )
}

export default OurNumbers