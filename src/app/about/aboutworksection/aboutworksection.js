import React from 'react';
import Aboutworkcards from './comp/aboutworkcards';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Correct hook in Next.js 13+

function Aboutworksection() {
  return (
    <>
      <div className={` about-work-section px-[1.5rem] min-h-[10rem] mt-[0px] md:mt-[0rem] bg-[black] `}>
        <p className={`font-average capabilities-text about-work-section-work-heading text-[4rem] text-[--textprimary] font-[400]`}>Work</p>
        <div className=" about-card-component-wrapper py-[6rem]">
        <div className='about-work-section-box-1'>
          <Aboutworkcards border={"1px"} company={"RPA Company"} device={"Mobile App"} beforpara={"Discovery & Research, Strategy, Experience"} afterpara={"Design, Visual Design"} />
        </div>
        <div className='about-work-section-box-2'>
          <Aboutworkcards pr={"25px"} border={"1px"} company={"Dynegy"} device={"Website"} beforpara={"Visual Design, Experience Design"} />
        </div>
        <div className='about-work-section-box-3'>
          <Aboutworkcards company={"Afious"} device={"Mobile App"} beforpara={"Strategy, Experience Design, Visual Design"} />
        </div>
        </div>
        <div className="section-bottom-left flex mt-[1rem] items-center gap-[8px] hover:translate-x-[20px] w-fit duration-300">
        <Link href="/work"><p className='text-[1.125rem] about-work-section-link font-[400] text-[--textprimary]'>See all Work</p></Link>
          <img className='about-work-section-link' src="/images/aboutpageimg/whiterightarrow.svg" alt="" />
        </div>
      </div>
    </>
  );
}

export default Aboutworksection;
