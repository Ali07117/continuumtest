'use client'

import React from 'react';
import Contactsection from '../components/homesections/contactsection';
import Navbar from '../components/navbar';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)
// import LocomotiveScroll from 'locomotive-scroll';

function Contactpage() {
  // const locomotiveScroll = new LocomotiveScroll();
  useGSAP(
    () => {
      gsap.to(".loading-layer", {
        transform: "translateY(-200%)",
        duration: 1,
        delay: 0.5,
        ease: "power2.inOut",
      });
      // --
  
      gsap.to(".logo-icon-animated", {
        rotation: 360,
        duration: 0.5,
        ease: "none",
      });
      });
  return (
    <>
    <div className='h-[100vh] loading-layer w-[100%] bg-[black] fixed top-[0px] left-[0px] z-[9999] flex items-center justify-center'>
      <img className='h-[80px] logo-icon-animated' src="/images/logoicon.svg" alt="" />
    </div>
      <div className="contact-page-wrapper bg-[black] pt-[7.3rem] md:pt-[7.3rem] ">
        <div className="contact-page-nav-container pt-[6rem] md:pt-[3.5rem] lg:pt-[0rem] px-[1.5rem]">
          <Navbar/>
        </div>
        <Contactsection />
      </div>
    </>
  );
}

export default Contactpage;
