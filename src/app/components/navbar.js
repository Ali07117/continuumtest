"use client"

import Link from 'next/link';
import React, { useState } from 'react';

function Navbar() {

  const [active, setActive] = useState(true)
  return (
    <>
    <div className="navContainer navbg h-[4.3rem] flex justify-between items-center">
      <div className="navLeft">
          <Link href="/"><img className='' src="/images/logo.svg" alt="" /></Link>
      </div>
      <div className="nav-right flex gap-[32px]">
          <Link className='' href="/about"><p className=' font-inter  font-[200] text-[1.125rem] text-[--textprimary]'>About</p></Link>
          <Link className='' href="#"><p className=' font-inter font-[200] text-[1.125rem] text-[--textprimary]'>Capabilities</p></Link>
          <Link className='' href="#"><p className=' font-inter font-[200] text-[1.125rem] text-[--textprimary]'>Work</p></Link>
          <Link className='' href="#"><p className=' font-inter font-[200] text-[1.125rem] text-[--textprimary]'>Contact</p></Link>
      </div>
      <img className='hamburger hidden' src="/images/navhamburger.svg" alt=""   onClick={()=>setActive(!active)}/>
      <div className={`hidden-nav bg-[#044AFF] flex flex-col items-center gap-[30px] py-[60px] absolute h-[100vh] duration-[0.5s] z-[999] ${active ? 'top-[-200%]' : 'top-[0%]'}  left-[0px] w-[100%]`}>
      <img className='cursor-pointer absolute top-[20px] left-[20px]' src="/images/navcross.svg" alt="" onClick={()=>setActive(!active)} />
          <Link className='' href="/about"><p className=' font-inter  font-[200] text-[1.125rem] text-[--textprimary]'>About</p></Link>
          <Link className='' href="#"><p className=' font-inter font-[200] text-[1.125rem] text-[--textprimary]'>Capabilities</p></Link>
          <Link className='' href="#"><p className=' font-inter font-[200] text-[1.125rem] text-[--textprimary]'>Work</p></Link>
          <Link className='' href="#"><p className=' font-inter font-[200] text-[1.125rem] text-[--textprimary]'>Contact</p></Link>
      </div>
    </div>
    </>
  );
}

export default Navbar;
