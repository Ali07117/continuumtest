import React from 'react';
import Aboutworkcards from '../about/aboutworksection/comp/aboutworkcards';
import Footernav from './homesections/footernav';

function OtherWorkSection() {
  return (
    <>
    <div className="other-work-wrapper bg-[--bgprimary] mt-[18rem]">
        <div className="other-work-top h-[120px] w-[100%] bg-[#D5D9E4] flex items-center justify-center gap-[1rem]">
            <p className='text-[#00259C] font-average text-[3rem]'>Ready to bring your project to life?</p>
            <button className='bg-[#00259C] text-[18px] text-[white] font-[400] border-[2px] border-[#044AFF] px-[3rem] py-[13px] rounded-[2rem]'>Contact Us</button>
        </div>
        <div className="other-work-section bg-[--bgprimary] pt-[5rem]">
        <p className='font-average text-[--textprimary] text-[3rem] px-[1.5rem]'>Other Work</p>
        <div className=" other-work-card-component-wrapper py-[6rem] px-[1.5rem]">
          <Aboutworkcards pr={"25px"} border={"1px"} company={"Dynegy"} device={"Website"} beforpara={"Visual Design, Experience Design"}  />
          <Aboutworkcards company={"Afious"} device={"Mobile App"} beforpara={"Strategy, Experience Design, Visual Design"} />
        </div>
        </div>
        <div className='px-[1.5rem]'>
    <Footernav/>
        </div>
    </div>
    
    </>
  );
}

export default OtherWorkSection;
