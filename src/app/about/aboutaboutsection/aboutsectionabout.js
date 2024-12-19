"use client"

import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
import Navbar from '@/app/components/navbar';
gsap.registerPlugin(ScrollTrigger)
function Aboutsectionabout() {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.removeAttribute('controls');
      videoRef.current.controls = false;
    }
    
  }, []);
  return (
    <>
      <div className=' about-wrapper pt-[14.3rem] bg-[black] h-[100%] px-[1.5rem] w-[100%]'>
        <Navbar />
        <div className=' text-anime-container'>
        <h1 className='hero-heading text-[white] text-[8rem] about-heading-after-1800 leading-[6.5rem] text-[--textprimary] font-average'>About </h1>

        <span className='relative w-[100%]'>
          <h2 className='anime-text about-anime-text text-nowrap top-[0px] left-[0px] mt-[1rem] sm:mt-[2rem] relative font-[400] text-[4.7vw] leading-[5.7vw] text-[--textprimary] font-average'>At <span className='text-[4.3vw] leading-[5.7vw] stroke text-[#044AFF] font-average'>Continuum,</span> we create digital experiences</h2>
          <h2 className='anime-text about-anime-text top-[0px] stroke left-[0px] absolute w-[0%] overflow-hidden text-nowrap  text-[4.7vw] leading-[5.7vw] text-[#044AFF] font-average'>At <span className='text-[4.3vw] leading-[5.7vw] text-[#044AFF] font-average'>Continuum,</span> we create digital experiences</h2>
        </span>
        <span className='relative w-[100%]'>
          <h2 className='anime-text about-anime-text top-[0px] left-[0px] text-nowrap text-[4.7vw] leading-[5.7vw] text-[--textprimary] font-average'>that deliver measurable results. With expertise</h2>
          <h2 className='anime-text about-anime-text top-[0px] stroke left-[0px] absolute w-[0%] text-[#044AFF] overflow-hidden text-nowrap text-[4.7vw] leading-[5.7vw] font-average'>that deliver measurable results. With expertise</h2>
        </span>
        <span className='relative w-[100%]'>
          <h2 className='anime-text about-anime-text top-[0px] left-[0px] text-nowrap text-[4.7vw] leading-[5.7vw] text-[--textprimary] font-average'>across industries, we transform ideas into user-</h2>
          <h2 className='anime-text about-anime-text top-[0px] stroke left-[0px] absolute w-[0%] text-[#044AFF] overflow-hidden text-nowrap text-[4.7vw] leading-[5.7vw] font-average'>across industries, we transform ideas into user-</h2>
        </span>
        <span className='relative w-[100%]'>
          <h2 className='anime-text about-anime-text top-[0px] left-[0px] text-nowrap text-[4.7vw] leading-[5.7vw] text-[--textprimary] font-average'>friendly products for everyone from startups to</h2>
          <h2 className='anime-text about-anime-text top-[0px] stroke left-[0px] absolute w-[0%] text-[#044AFF] overflow-hidden text-nowrap text-[4.7vw] leading-[5.7vw] font-average'>friendly products for everyone from startups to</h2>
        </span>
        <span className='relative w-[5%]'>
          <h2 className='anime-text about-anime-text top-[0px] left-[0px] text-nowrap text-[4.7vw] leading-[5.7vw] text-[--textprimary] font-average'>Fortune 500 companies</h2>
          <h2 className='anime-text about-anime-text top-[0px] stroke left-[0px] absolute w-[0%] text-[#044AFF] overflow-hidden text-nowrap text-[4.7vw] leading-[5.7vw] font-average'>Fortune 500 companies</h2>
        </span>
        </div>
        <div className="img-container aboutimg1-container mt-[2rem] flex justify-center">
        <video
            ref={videoRef}
            className={`aboutimg1 rounded-[2.5rem] object-cover hero-image scale-[0] h-[100vh] w-[100%]`}
            src="/videos/video13.mp4"
            autoPlay
            loop
            muted
            playsInline    // Ensures inline playback on iOS
            webkit-playsinline // iOS-specific attribute for inline playback
            controls={false}    // Hides video controls
            controlsList="nodownload"  // Helps block certain controls like download
            style={{ pointerEvents: 'none' }} // Disable interaction with video
          ></video>
          {/* <div className=' aboutimg1 mt-[6rem] rounded-[2.5rem] hero-image scale-[0] h-[100vh] w-[100%]' style={{ backgroundImage: "url(/images/heroimg1.svg)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div> */}
        </div>
      </div>
    </>
  );
}

export default Aboutsectionabout;
