"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation'; // Correct hook in Next.js 13+

function Navbar() {
  const [active, setActive] = useState(true);
  const pathname = usePathname(); // Get the current URL path

  return (
    <>
      <div className="navContainer navbg h-[4.3rem] flex justify-between items-center">
        <div className="navLeft">
          <Link href="/">
            <img className="nav-logo" src="/images/logo.svg" alt="Logo" />
          </Link>
        </div>

        <div className="nav-right flex gap-[32px]">
          <Link href="/about">
            <p className={`font-inter font-[200] text-[1.125rem] ${
              pathname === "/about" ? 'text-[#044AFF]' : 'text-[--textprimary]'
            }`}>
              About
            </p>
          </Link>

          <Link href="/capabilities">
            <p className={`font-inter font-[200] text-[1.125rem] ${
              pathname === "/capabilities" ? 'text-[#044AFF]' : 'text-[--textprimary]'
            }`}>
              Capabilities
            </p>
          </Link>

          <Link href="/work">
            <p className={`font-inter font-[200] text-[1.125rem] ${
              pathname === "/work" ? 'text-[#044AFF]' : 'text-[--textprimary]'
            }`}>
              Work
            </p>
          </Link>

          <Link href="/contact">
            <p className={`font-inter font-[200] text-[1.125rem] ${ pathname === "/contact" ? 'text-[#044AFF]' : 'text-[--textprimary]' }`}> Contact </p>
          </Link>
        </div>

        <img className="hamburger hidden" src="/images/navhamburger.svg" alt="" onClick={() => setActive(!active)} />

        <div className={`hidden-nav bg-[#000] flex flex-col items-center gap-[30px] py-[60px] absolute h-[100vh] duration-[0.5s] z-[999] ${active ? 'top-[-200%]' : 'top-[0%]'} left-[0px] w-[100%]`}>
          <img className="cursor-pointer absolute top-[20px] right-[20px]" src="/images/navcross.svg" alt="" onClick={() => setActive(!active)} />
          <Link href="/about">
          <p className={`font-inter font-[200] text-[1.125rem] ${ pathname === "/about" ? 'text-[#044AFF]' : 'text-[--textprimary]' }`}> About </p>
          </Link>
          <Link href="/capabilities">
            <p className={`font-inter font-[200] text-[1.125rem] ${ pathname === "/capabilities" ? 'text-[#044AFF]' : 'text-[--textprimary]' }`}> Capabilities </p>
          </Link>
          <Link href="/work">
          <p className={`font-inter font-[200] text-[1.125rem] ${ pathname === "/work" ? 'text-[#044AFF]' : 'text-[--textprimary]' }`}> Work </p>
          </Link>
          <Link href="/contact">
          <p className={`font-inter font-[200] text-[1.125rem] ${ pathname === "/contact" ? 'text-[#044AFF]' : 'text-[--textprimary]' }`}> Contact </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar
