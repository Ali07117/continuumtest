"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; // Correct hook in Next.js 13+

function Navbar(props) {
  const [active, setActive] = useState(true);
  const pathname = usePathname(); // Get the current URL path
  const [lastScrollY, setLastScrollY] = useState(0);  // Keep track of the last scroll position
  const [isHidden, setIsHidden] = useState(false);  // Control navbar visibility

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsHidden(true);  // Hide the navbar
      } else {
        // Scrolling up
        setIsHidden(false);  // Show the navbar
      }

      setLastScrollY(currentScrollY);  // Update lastScrollY to the current scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);  // Cleanup the event listener on unmount
    };
  }, [lastScrollY]); 

  return (
    <>
      <div className={`navContainer nav-bar ${props.blend} navbar ${isHidden ? 'hiddenn' : ''} navbg z-[9998] h-[4.3rem] flex justify-between items-center`} style={{backgroundColor:`${props.bg}`}}>
        <div className="navLeft">
          <Link className='' href="/">
            {/* <img className="nav-logoicon h-[40px]" src="/images/logoicon.svg" alt="Logo" /> */}
            <img className="nav-logo" src="/images/logo.svg" alt="Logo" />
          </Link>
        </div>

        <div className="nav-right flex gap-[32px]">
          <Link href="/about">
            <p className={`font-inter font-[200] text-[1.125rem] ${pathname === "/about" ? 'text-[#044AFF] underline-offset-4 underline' : ' duration-300 hover:underline-offset-[5px] hover:underline text-[--textprimary]'
              }`}>
              About
            </p>
          </Link>

          <Link href="/capabilities">
            <p className={`font-inter font-[200] text-[1.125rem] ${pathname === "/capabilities" ? 'text-[#044AFF] underline-offset-4 underline' : ' duration-300 hover:underline-offset-[5px] hover:underline text-[--textprimary]'
              }`}>
              Capabilities
            </p>
          </Link>

          <Link href="/work">
            <p className={`font-inter font-[200] text-[1.125rem] ${pathname === "/work" ? 'text-[#044AFF] underline-offset-4 underline' : ' duration-300 hover:underline-offset-[5px] hover:underline text-[--textprimary]'
              }`}>
              Work
            </p>
          </Link>

          <Link href="/contact">
            <p className={`font-inter font-[200] text-[1.125rem] ${pathname === "/contact" ? 'text-[#044AFF] underline-offset-4 underline' : ' duration-300 hover:underline-offset-[5px] hover:underline text-[--textprimary]'}`}> Contact </p>
          </Link>
        </div>

        <img className="hamburger hidden" src="/images/navhamburger.svg" alt="" onClick={() => setActive(!active)} />

      </div>
        <div className={`hidden-nav bg-[#000] duration-700 flex flex-col items-center gap-[30px] py-[60px] fixed max-h-[100vh] overflow-y-hidden h-[100vh] pt-[100px] scrollnone duration-[0.5s] z-[999] ${active ? 'top-[-20000%]' : 'top-[0%]'} left-[0px] w-[100%]`}>
          <img className="cursor-pointer absolute top-[20px] right-[20px]" src="/images/navcross.svg" alt="" onClick={() => setActive(!active)} />
          <Link href="/about">
            <p className={`font-inter font-[200] text-[1.125rem] ${pathname === "/about" ? 'text-[#044AFF]' : 'text-[--textprimary]'}`}> About </p>
          </Link>
          <Link href="/capabilities">
            <p className={`font-inter font-[200] text-[1.125rem] ${pathname === "/capabilities" ? 'text-[#044AFF]' : 'text-[--textprimary]'}`}> Capabilities </p>
          </Link>
          <Link href="/work">
            <p className={`font-inter font-[200] text-[1.125rem] ${pathname === "/work" ? 'text-[#044AFF]' : 'text-[--textprimary]'}`}> Work </p>
          </Link>
          <Link href="/contact">
            <p className={`font-inter font-[200] text-[1.125rem] ${pathname === "/contact" ? 'text-[#044AFF]' : 'text-[--textprimary]'}`}> Contact </p>
          </Link>
        </div>
    </>
  );
}

export default Navbar
