"use client"

import Link from 'next/link';
import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from "gsap/all";
import Navbar from '@/app/components/navbar';
gsap.registerPlugin(ScrollTrigger)



function Aboutsectionabout() {
 
  return (
    <>
    <div className=' about-wrapper bg-[black] min-h-[120vh] px-[1.5rem] w-[100%]'>
      <Navbar/>
      <h1 className='hero-heading text-[white] text-[6rem] mt-[22%] lg:mt-[40vh] text-[--textprimary] font-average'>About </h1>
      <span className='relative w-[100%]'>
      <h2 className='anime-text text-nowrap top-[0px] left-[0px] relative font-[400] text-[4.7vw] leading-[5.7vw] text-[--textprimary] font-average'>At <span className='text-[4.7vw] leading-[5.7vw] text-[#044AFF] font-average'>Continuum,</span> we create digital experiences</h2>
      <h2 className='anime-text top-[0px] stroke left-[0px] absolute w-[0%] overflow-hidden text-nowrap  text-[4.7vw] leading-[5.7vw] text-[#044AFF] font-average'>At <span className='text-[4.7vw] leading-[5.7vw] text-[#044AFF] font-average'>Continuum,</span> we create digital experiences</h2>
      </span>
      <span className='relative w-[100%]'>
      <h2 className='anime-text top-[0px] left-[0px] text-nowrap text-[4.7vw] leading-[5.7vw] text-[--textprimary] font-average'>that deliver measurable results. With expertise</h2>
      <h2 className='anime-text top-[0px] stroke left-[0px] absolute w-[0%] text-[#044AFF] overflow-hidden text-nowrap text-[4.7vw] leading-[5.7vw] font-average'>that deliver measurable results. With expertise</h2>
      </span>
      <span className='relative w-[100%]'>
      <h2 className='anime-text top-[0px] left-[0px] text-nowrap text-[4.7vw] leading-[5.7vw] text-[--textprimary] font-average'>across industries, we transform ideas into user-</h2>
      <h2 className='anime-text top-[0px] stroke left-[0px] absolute w-[0%] text-[#044AFF] overflow-hidden text-nowrap text-[4.7vw] leading-[5.7vw] font-average'>across industries, we transform ideas into user-</h2>
      </span>
      <span className='relative w-[100%]'>
      <h2 className='anime-text top-[0px] left-[0px] text-nowrap text-[4.7vw] leading-[5.7vw] text-[--textprimary] font-average'>friendly products for everyone from startups to</h2>
      <h2 className='anime-text top-[0px] stroke left-[0px] absolute w-[0%] text-[#044AFF] overflow-hidden text-nowrap text-[4.7vw] leading-[5.7vw] font-average'>friendly products for everyone from startups to</h2>
      </span>
      <span className='relative w-[5%]'>
      <h2 className='anime-text top-[0px] left-[0px] text-nowrap text-[4.7vw] leading-[5.7vw] text-[--textprimary] font-average'>Fortune 500 companies</h2>
      <h2 className='anime-text top-[0px] stroke left-[0px] absolute w-[0%] text-[#044AFF] overflow-hidden text-nowrap text-[4.7vw] leading-[5.7vw] font-average'>Fortune 500 companies</h2>
      </span>
      <div className="img-container mt-[2rem] flex justify-center">
      <div className=' aboutimg1 mt-[8rem] rounded-[2.5rem] hero-image scale-[0] h-[100vh] w-[100%]' style={{backgroundImage:"url(/images/heroimg1.svg)", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}></div>
      </div>
    </div>
    </>
  );
}

export default Aboutsectionabout;
