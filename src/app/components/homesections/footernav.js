import React from 'react';

function Footernav() {
  return (
    <>
        <div className="relative z-[5] footer-nav flex justify-between pt-[0.5rem] mt-[1rem] items-start footer-nav-wrapper max-h-[75px] h-[75px] border-t-[1px] border-t-[#FFFFFF]">
            <div className="empty-div w-[15%]"></div>
            <div className="footer-links flex items-center gap-[32px]">
            <p className=' font-inter  text-[--textprimary] text-[1rem] font-inter font-[400]'>About</p>
            <p className=' font-inter  text-[--textprimary] text-[1rem] font-inter font-[400]'>Capabilities</p>
            <p className=' font-inter  text-[--textprimary] text-[1rem] font-inter font-[400]'>Work</p>
            <p className=' font-inter  text-[--textprimary] text-[1rem] font-inter font-[400]'>Contact</p>
            <p className=' font-inter  text-[--textprimary] text-[1rem] font-inter font-[400]'>Terms</p>
            <p className=' font-inter  text-[--textprimary] text-[1rem] font-inter font-[400]'>Privacy</p>
            </div>
            <div className="footer-copyright text-[--textprimary] text-[1rem] font-inter font-[400]">&copy; 2024 Continuum Design Lab</div>
        </div>
    </>
  );
}

export default Footernav;
