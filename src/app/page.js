'use client';
import { useEffect,useState } from 'react';
import Lenis from 'lenis'
import Landing from '@/components/Landing';
import { AnimatePresence,} from 'framer-motion';
import Preloader from '@/components/Preloader';
import Houses from '@/components/Houses';
import SimplyRetsListings from '@/components/Listings';
import WhyUs from '@/components/WhyUs';
import Review from '@/components/Reviews';


export default function Home() {
 const [isLoading,setIsLoading]=useState(true)
  useEffect(()=>{
    // setTimeout(() => {
    //   setIsLoading(false)
    // window.scrollTo({top:0})
    // }, 2000);

    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className='px-4 bg-brand-background dark:bg-brand-background-dark transition-all duration-500 ease-in-out'>
      {/* <AnimatePresence mode="wait">
    {isLoading &&< Preloader/>}
    </AnimatePresence> */}
    <WhyUs/>
<SimplyRetsListings/>
    <Review/>
     <Houses/>
      {/* <Landing /> */}

    </main>
  );
}