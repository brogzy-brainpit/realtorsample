'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../app/common/RoundedButton';
import Magnetic from '../../app/common/Magnetic';
import DarkModeToggle from '../DarkModeToggle';

export default function Index() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect( () => {
      if(isActive) setIsActive(false)
    }, [pathname])

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
                onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"},setIsActive(false))}
            }
        })
    }, [])
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

    return (
        <>
        <div className={` z-40 backdrop-blur-lg  relative  mix-blend-difference `}>
        <div ref={header} className={`${styles.header} `}>
            <div className={`${styles.logo} text-brand-text-dark transition-all duration-500 ease-in-out`}>
                <p className={`${styles.copyright} font-custom`}>©</p>
                <div className={`${styles.name} font-custom mix-blend-difference`}>
                    <p className={styles.codeBy}>Realtor</p>
                    <p className={styles.dennis}>Memet</p>
                    {/* <p className={styles.snellenberg}>Realtor</p> */}
                </div>
            </div>
            <div className={`${styles.nav} text-brand-text-dark transition-all duration-500 ease-in-out`}>
                <Magnetic>
                    <div>
                    <DarkModeToggle/>
                    </div>  
                </Magnetic>

               <div className='hidden md:flex w-full mix-blend-differenc'>
               {navItems.map(({href,title},index)=>{
                return (
                      <Magnetic key={index}>
                    <div className={`${styles.el} font-custom-condensed `}>
                        <a href={href} className='mix-blend-differenc' >{title}</a>
                        <div className={`${styles.indicator} bg-brand-text dark:bg-brand-text-dark transition-all duration-500 ease-in-out `}></div>
                    </div>
                </Magnetic>
                )
               })}
                
               </div>
            </div>
            
        </div>
        </div>
        <div ref={button} className={styles.headerButtonContainer}>
            <Rounded  onClick={() => {setIsActive(!isActive)}} className='bg-brand-secondary  flex items-center justify-center relative m-[20px] w-[60px] h-[60px] rounded-full cursor-pointer'>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </Rounded>
        </div>
        <AnimatePresence mode="wait">
            {isActive && <Nav setIsActive={setIsActive} isActive={isActive} />}
        </AnimatePresence>
        </>
    )
}
