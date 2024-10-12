"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
function Footernav() {
  const pathname = usePathname(); // Get the current URL path
  return (
    <>
    <div>
    <div className="bottom-logo  z-[5] relative flex justify-center mt-[12rem]"><Link href="/"><img className='h-[16px] footer-logo' src="/images/logo.svg" alt="" /></Link></div>
        <div className="relative z-[5] footer-nav flex justify-between pt-[0.5rem] mt-[1rem] items-start footer-nav-wrapper  min-h-[70px] border-t-[1px] border-t-[#FFFFFF]">
            <div className="empty-div w-[15%]"></div>
            <div className="footer-links flex items-center gap-[32px]">
            {/* <Link href="/about">
            <p className={`font-inter font-[200] text-[1.125rem] ${pathname === "/about" ? 'text-[#044AFF]' : 'text-[--textprimary]'
              }`}>
              About
            </p>
          </Link> */}
          <Link href="/about"><p className={` font-inter  text-[1rem] font-inter font-[400] ${pathname === "/about" ? 'text-[#044AFF]' : 'text-[--textprimary]'
              } `}>About</p> </Link>
            <Link href="/capabilities"><p className={` font-inter  text-[1rem] font-inter font-[400] ${pathname === "/capabilities" ? 'text-[#044AFF]' : 'text-[--textprimary]'
              } `}>Capabilities</p> </Link>
            <Link href="/work"><p className={` font-inter  text-[1rem] font-inter font-[400] ${pathname === "/work" ? 'text-[#044AFF]' : 'text-[--textprimary]'
              } `}>Work</p> </Link>
            <Link href="/contact"><p className={` font-inter  text-[1rem] font-inter font-[400] ${pathname === "/contact" ? 'text-[#044AFF]' : 'text-[--textprimary]'
              } `}>Contact</p> </Link>
            <p className=' font-inter  text-[--textprimary] text-[1rem] font-inter font-[400]'>Terms</p>
            <p className=' font-inter  text-[--textprimary] text-[1rem] font-inter font-[400]'>Privacy</p>
            </div>
            <div className="footer-copyright text-[--textprimary] text-[1rem] font-inter font-[400]">&copy; 2024 Continuum Design Lab</div>
        </div>
    </div>
    </>
  );
}

export default Footernav;
