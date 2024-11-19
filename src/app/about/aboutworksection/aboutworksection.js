import React from 'react';
import Aboutworkcards from './comp/aboutworkcards';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Correct hook in Next.js 13+

function Aboutworksection() {
  return (
    <>
      <div className={` about-work-section px-[1.5rem] min-h-[10rem] mt-[0px] md:mt-[0rem] bg-[black] `}>
        <p className={`font-average capabilities-text text-[4rem] text-[--textprimary] font-[400]`}>Work</p>
        <div className=" about-card-component-wrapper py-[6rem]">
          <Aboutworkcards border={"1px"} company={"RPA Company"} device={"Mobile App"} beforpara={"Discovery & Research, Strategy, Experience"} afterpara={"Design, Visual Design"} />
          <Aboutworkcards pr={"25px"} border={"1px"} company={"Dynegy"} device={"Website"} beforpara={"Visual Design, Experience Design"} />
          <Aboutworkcards company={"Afious"} device={"Mobile App"} beforpara={"Strategy, Experience Design, Visual Design"} />
        </div>
        <div className="section-bottom-left flex mt-[1rem] items-center gap-[8px] hover:translate-x-[20px] w-fit duration-300">
        <Link href="/work"><p className='text-[1.125rem] font-[400] text-[--textprimary]'>See all Work</p></Link>
          <img src="/images/aboutpageimg/whiterightarrow.svg" alt="" />
        </div>
      </div>
    </>
  );
}

export default Aboutworksection;
