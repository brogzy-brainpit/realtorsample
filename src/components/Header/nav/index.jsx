import React, { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';
import Magnetic from '@/app/common/Magnetic';
import DarkModeToggle from '../../DarkModeToggle';

const navItems = [
  {
    title: "About",
    href: "#about",
  }, {
    title: "why us?",
    href: "#why",
  },
  {
    title: "Listings",
    href: "#listings",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
  {
    title: "Contact",
    href: "#contact",
  },
]

export default function Index({setIsActive,isActive}) {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 

      className={`${styles.menu} w-full max-w-full z-[3] h-[100vh] fixed right-0 top-0 text-brand-text dark:text-brand-text-dark duration-500 transition-colors bg-brand-secondary/80 backdrop-blur-md`}
      >
       <div className={`${styles.body} px-4 container mx-auto`}>
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>
               
                    <div className=' flex justify-between items-center uppercase text-[13px] font-custom-condensed mb-[30px] pb-[10px]  border-b-[1px] border-b-brand-text  text-brand-text dark:text-brand-text-dark duration-500 transition-colors'>
                        <p className='text-brand-text'>Navigation</p>
                            <Magnetic>
                            <div>
                            <DarkModeToggle/>
                            </div>  
                            </Magnetic>
                    </div>
                    {
                      navItems.map( (data, index) => {
                        return <Link setIsActive={setIsActive} isActiv={isActive}
                        key={index} 
                        data={{...data, index}} 
                        isActive={selectedIndicator == data.href} 
                        setSelectedIndicator={setSelectedIndicator}>
                        </Link>
                      })
                    }
            </div>
            <Footer />
        </div>
        <Curve />
    </motion.div>
  )
}