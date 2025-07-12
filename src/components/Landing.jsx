import CalModalButton from '@/app/BookCall/CalModalButton';
import React from 'react';
import RoundedButton from "../app/common/RoundedButton"
import Link from 'next/link';


function Landing() {
  return (
    <div className="mix-blend-scree w-full h-screen overflow-hidden">
      <div className="relative flex w-full h-full">
        {/* Right side with styled video */}
        <div className="z-[4] w-full h-full absolute top-0 left-0 group overflow-hidden">
          {/* VIDEO */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover filter grayscal group-hover:grayscal-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
          >
            <source src="/videos/estatevid.webm" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-700 ease-in-out pointer-events-none" />
        </div>
        {/* dark overlay */}
        <div className=' pointer-events-none mix-blend-differenc  z-[5] absolute top-0 left-0 w-full h-full bg-black/30'>
        </div>
          {/* end-dark overlay */}
          {/* main hero text */}
        <div className='  absolute absolut w-full h-full flex flex-col gap-4  justify-center items-center '>
        <div className='z-[10] pointer-events-non  mix-blend-difference  absolut w-full flex flex-col  justify-center items-center bgred-400/80'>
        <p className='my-4 uppercase text-center mix-blend-differenc text-brand-text-dark font-custom-condensed text-[24px] leading-[20px] md:text-[40px] md:leading-[48px] lg:text-[54px] lg:leading-[48px]'>
          exceptional
          </p>
        <p className='capitaliz uppercase text-center mix-blend-differenc text-brand-text-dark font-custom   text-[64px] leading-[54px] md:text-[90px] md:leading-[78px] lg:text-[123px] lg:leading-[118px]'>
          luxury estate
          </p>
        </div>
         <div className=' z-[10] flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4'>
       <RoundedButton>
        <Link href={'#listings'}>
  <p className='text-para font-normal text-brand-text-dark capitalize'>our properties</p>
        </Link>

</RoundedButton>
 <RoundedButton backgroundColor='#94b141 '>
  <CalModalButton  text='book an appointment'/>

</RoundedButton>
     </div>
        </div>
         {/* end main hero text */}
        
         
      </div>
    </div>
  );
}

export default Landing;
