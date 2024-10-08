import React from 'react';
import Aboutworkcards from './comp/aboutworkcards';

function Aboutworksection() {
  return (
    <>
        <div className={`capabilities-wrapper px-[1.5rem] min-h-[10rem] mt-[6rem] bg-[black] `}>
    <p className={`font-average capabilities-text text-[4rem] text-[--textprimary] font-[400]`}>Work</p>
    <div className=" about-card-component-wrapper py-[3rem]">
    <Aboutworkcards border={"1px"} company={"RPA Company"} device={"Mobile App"} beforpara={"Discovery & Research, Strategy, Experience"} afterpara={"Design, Visual Design"}/>
    <Aboutworkcards border={"1px"} company={"Dynegy"} device={"Website"} beforpara={"Visual Design, Experience Design"}/>
    <Aboutworkcards company={"Afious"} device={"Mobile App"} beforpara={"Strategy, Experience Design, Visual Design"}/>
    </div>
    <div className="section-bottom-left flex mt-[1rem] items-center gap-[8px]">
            <p className='text-[1.125rem] font-[400] text-[--textprimary]'>View all works</p>
            <img src="/images/aboutpageimg/whiterightarrow.svg" alt="" />
        </div>
    </div>
    </>
  );
}

export default Aboutworksection;
