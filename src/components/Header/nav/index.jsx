import React, { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';

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

export default function index({setIsActive,isActive}) {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 

      className={`${styles.menu} z-[3] h-[100vh] fixed right-0 top-0 text-brand-text dark:text-brand-text-dark duration-500 transition-colors bg-brand-secondary`}
      >
       <div className={styles.body}>
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>
               
                    <div className='uppercase text-[13px] font-custom-condensed mb-[30px]  border-b-[1px] border-b-brand-text  text-brand-text dark:text-brand-text-dark duration-500 transition-colors'>
                        <p className='mb-2 text-brand-text'>Navigation</p>
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