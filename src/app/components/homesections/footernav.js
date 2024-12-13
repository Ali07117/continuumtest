"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
function Footernav() {
  const pathname = usePathname(); // Get the current URL path
  return (
    <>
    <div>
    <div className="bottom-logo  z-[5] relative flex justify-center mt-[3rem] lg:mt-[12rem]"><Link href="/"><img className=' nav-logo' src="/images/logo.svg" alt="" /></Link></div>
        <div className="relative z-[5] footer-nav flex justify-center pt-[0.5rem] mt-[1rem] items-start footer-nav-wrapper max-h-[100px] h-[70px] border-t-[1px] border-t-[#FFFFFF]">
            {/* <div className="empty-div w-[15%]"></div> */}
            <div className="footer-links flex items-center gap-[32px]">
          <Link href="/about"><p className={` font-inter  text-[1rem] font-inter font-[200] ${pathname === "/about" ? 'text-[--textprimary]' : ' duration-300 hover:underline-offset-4 hover:underline text-[--textprimary]'
              } `}>About</p> </Link>
            <Link href="/capabilities"><p className={` font-inter  text-[1rem] font-inter font-[200] ${pathname === "/capabilities" ? 'text-[--textprimary]' : ' duration-300 hover:underline-offset-4 hover:underline text-[--textprimary]'
              } `}>Capabilities</p> </Link>
            <Link href="/work"><p className={` font-inter  text-[1rem] font-inter font-[200] ${pathname === "/work" ? 'text-[--textprimary]' : ' duration-300 hover:underline-offset-4 hover:underline text-[--textprimary]'
              } `}>Work</p> </Link>
            <Link href="/contact"><p className={` font-inter  text-[1rem] font-inter font-[200] ${pathname === "/contact" ? 'text-[--textprimary]' : ' duration-300 hover:underline-offset-4 hover:underline text-[--textprimary]'
              } `}>Contact</p> </Link>
            <p className=' font-inter  text-[--textprimary] hover:underline-offset-[5px] hover:underline text-[1rem] font-inter font-[200]'>Terms</p>
            <p className=' font-inter  text-[--textprimary] hover:underline-offset-[5px] hover:underline text-[1rem] font-inter font-[200]'>Privacy</p>
            </div>
            {/* <div className="footer-copyright text-[--textprimary] text-[1rem] font-inter font-[400]">&copy; 2024 Continuum Design Lab</div> */}
        </div>
    </div>
    </>
  );
}

export default Footernav;
