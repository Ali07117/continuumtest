import React, { useEffect } from 'react';
import Aboutworkcards from './comp/aboutworkcards';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Correct hook in Next.js 13+

function Aboutworksection() {
  useEffect(() => {
  let showImg1Box = document.querySelector(".show-img-1-box");
  let showImg2Box = document.querySelector(".show-img-2-box");
  let showImg3Box = document.querySelector(".show-img-3-box");
  let showImg1 = document.querySelector(".show-img-1");
  let showImg2 = document.querySelector(".show-img-2");
  let showImg3 = document.querySelector(".show-img-3");
  showImg1Box.addEventListener("mouseenter",function(){
    showImg1.style.opacity="1";
  })
  showImg1Box.addEventListener("mouseleave",function(){
    showImg1.style.opacity="0";
  })

  showImg2Box.addEventListener("mouseenter",function(){
    showImg2.style.opacity="1";
  })
  showImg2Box.addEventListener("mouseleave",function(){
    showImg2.style.opacity="0";
  })

  showImg3Box.addEventListener("mouseenter",function(){
    showImg3.style.opacity="1";
  })
  showImg3Box.addEventListener("mouseleave",function(){
    showImg3.style.opacity="0";
  })


}, []);
  return (
    <>
      <div className={` about-work-section px-[1.5rem] min-h-[10rem] mt-[0px] md:mt-[0rem] bg-[black] `}>
        <p className={`font-average capabilities-text about-work-section-work-heading text-[4rem] text-[--textprimary] font-[400]`}>Work</p>
        <div className=" about-card-component-wrapper py-[6rem]">
        <div className='about-work-section-box-1 show-img-1-box relative'>
        <img className=" opacity-0 show-img-1 duration-300 h-[200px] w-[280px] absolute top-[-50%] left-[15%] rounded-[8px] object-cover" src="/images/section1img.svg" alt="" />
          <Aboutworkcards border={"1px"} company={"RPA Company"} device={"Mobile App"} beforpara={"Discovery & Research, Strategy, Experience"} afterpara={"Design, Visual Design"} />
        </div>
        <div className='about-work-section-box-2 relative show-img-2-box'>
        <img className=" opacity-0 show-img-2 duration-300 h-[200px] w-[280px] absolute top-[-50%] left-[15%] rounded-[8px] object-cover" src="/images/workimg2.svg" alt="" />
          <Aboutworkcards pr={"25px"} border={"1px"} company={"Dynegy"} device={"Website"} beforpara={"Visual Design, Experience Design"} />
        </div>
        <div className='about-work-section-box-3 relative show-img-3-box'>
        <img className=" opacity-0 show-img-3 duration-300 h-[200px] w-[280px] absolute top-[-50%] left-[15%] rounded-[8px] object-cover" src="/images/workimg3.svg" alt="" />
          <Aboutworkcards company={"Afious"} device={"Mobile App"} beforpara={"Strategy, Experience Design, Visual Design"} />
        </div>
        </div>
        {/* --- */}
        
        {/* --- */}
        <div className="section-bottom-left flex mt-[1rem] items-center gap-[8px] hover:translate-x-[20px] w-fit duration-300">
        <Link href="/work"><p className='text-[1.125rem] about-work-section-link font-[400] text-[--textprimary]'>See all Work</p></Link>
          <img className='about-work-section-link' src="/images/aboutpageimg/whiterightarrow.svg" alt="" />
        </div>
      </div>
    </>
  );
}

export default Aboutworksection;
