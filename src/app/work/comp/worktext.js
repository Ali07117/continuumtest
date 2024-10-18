'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Correct hook in Next.js 13+

function Worktext(props) {
  return (
    <>
      <div className="wrapper work-left-text-card-wrapper h-[100vh] pt-[10vh]">
        <p className='text-[6.5vw] md:text-[3.5vw] leading-[3.5rem] font-average text-[--textprimary]'>{props.heading}</p>
        <p className='text-[1.1rem] font-inter text-[--textprimary] pr-[5%] mt-[1.5rem]'>{props.para1} <br />{props.parar}</p>
        <p className='text-[1.1rem] font-[300] font-inter text-[--textprimary] leading-[1.8rem] mt-[1.5rem]'>{props.point1}</p>
        <p className='text-[1.1rem] font-[300] font-inter text-[--textprimary] leading-[1.8rem]'> {props.point2}</p>
        <p className='text-[1.1rem] font-[300] font-inter text-[--textprimary] leading-[1.8rem]'> {props.point3}</p>
        <p className='text-[1.1rem] font-[300] font-inter text-[--textprimary] leading-[1.8rem]'> {props.point4}</p>
        <Link href={`${props.pageurl}`}><div className="z-[3]  flex-col min-h-[46px] max-h-[46px] work-button flex items-center border-[2px] border-[#B0B0B0] flex-col w-[190px] bg-[#00259C] mt-[1.5rem]  text-[white] relative overflow-hidden rounded-[32px] text-[18px] cursor-pointer">
         <div className='  py-[0.5rem] px-[1.5rem] min-h-[50px] max-h-[50px] w-[150%] text-center layer-1 rounded-[32px] text-[1.1rem]  text-[--textprimary] font-[300] font-inter bg-[--bgprimary]'>View Case Study</div>
         <div className='  py-[0.5rem] px-[1.5rem] min-h-[50px] max-h-[50px] w-[150%] text-center layer-2 rounded-[32px] text-[1.1rem]  text-[--textsecondry] font-[300] font-inter bg-[#D5D9E4]'>View Case Study</div>
        </div></Link>
      </div>
    </>
  );
}

export default Worktext;
