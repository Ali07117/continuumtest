import React from 'react';

function Footernav() {
  return (
    <>
        <div className="relative z-[5] footer-nav flex justify-between pt-[0.5rem] mt-[1rem] items-start footer-nav-wrapper max-h-[75px] h-[75px] border-t-[1px] border-t-[#FFFFFF]">
            <div className="empty-div w-[15%]"></div>
            <div className="footer-links flex items-center gap-[32px]">
            <p className=' font-inter  font-[200] text-[1.125rem] text-[--textprimary]'>About</p>
            <p className=' font-inter  font-[200] text-[1.125rem] text-[--textprimary]'>Capabilities</p>
            <p className=' font-inter  font-[200] text-[1.125rem] text-[--textprimary]'>Work</p>
            <p className=' font-inter  font-[200] text-[1.125rem] text-[--textprimary]'>Contact</p>
            <p className=' font-inter  font-[200] text-[1.125rem] text-[--textprimary]'>Terms</p>
            <p className=' font-inter  font-[200] text-[1.125rem] text-[--textprimary]'>Privacy</p>
            </div>
            <div className="footer-copyright text-[--textprimary] text-[1rem] font-inter font-[400]">&copy; 2024 Continuum Design Lab</div>
        </div>
    </>
  );
}

export default Footernav;
