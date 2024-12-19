import React from 'react';
import Footernav from './homesections/footernav';
import Link from 'next/link';
import Aboutworkcards from '../about/aboutworksection/comp/aboutworkcards';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

function Otherwork1() {
    useGSAP(
        () => {
            gsap.to('.other-work-top-1', {
                opacity: 0,
                display: 'none',
                scrollTrigger: {
                  trigger: '.other-work-wrapper-1',
                  start: 'top 5%',
                  end: 'top 0%',
                  scrub: true,
                  // markers: true,
                  // comment
                  // commiit
                },
              }); 
            });
  return (
    <>
         <div className="other-work-wrapper-1 bg-[--bgprimary] relative mt-[12rem] ">
    <div className="h-[12rem] bg-[white]"></div>
        <div className="other-work-upper"></div>
        <div className="other-work-section bg-[--bgprimary] pt-[5rem]">
        <p className='font-average other-work-section-heading automation-animation-19 afious-animation-13 energy-animation-12 text-[--textprimary] text-[3rem] px-[1.5rem]'>Other Work</p>
        <div className=" other-work-card-component-wrapper pt-[6rem] pb-[12rem] px-[1.5rem]">
        <Link href="/energyprovider">
        <div className="show-img-1-box relative automation-animation-20 afious-animation-14 energy-animation-13">
        <img className=" opacity-0 show-img-1 duration-300 h-[300px] w-[420px] absolute top-[-50px] left-[10%] rounded-[8px] object-cover" src="/images/workimg3.svg" alt="" />
          <Aboutworkcards pr={"25px"} border={"1px"} company={"Dynegy"} device={"Website"} beforpara={"Visual Design, Experience Design"}  />
        </div>
        </Link>
        <Link href="/afious">
        <div className="show-img-2-box relative automation-animation-21 afious-animation-15 energy-animation-14">
        <img className=" opacity-0 show-img-2 h-[300px] w-[420px] absolute top-[-50px] left-[10%] rounded-[8px] object-cover" src="/images/workimg2.svg" alt="" />
          <Aboutworkcards company={"Afious"} device={"Mobile App"} beforpara={"Strategy, Experience Design, Visual Design"} />
        </div>
        </Link>
        </div>
        </div>

        <div className={` other-work-top min-h-[105px] z-[9] w-[100%] text-[white] sticky bottom-[0] flex items-center justify-center gap-[1rem] bg-[black] `}>
            <p className=' font-average other-work-top-text text-[3rem]'>Ready to bring your project to life?</p>
            <Link href="/contact"><button className='bg-[#00259C] text-[18px] other-work-top-button text-[white] font-[400] border-[2px] border-[#044AFF] px-[3rem] py-[13px] rounded-[2rem]'>Contact Us</button></Link>
        </div>
        <div className={` other-work-top other-work-top-1 z-[999] min-h-[105px] w-[100%] text-[#00259C] sticky bottom-[0] flex items-center bg-[#D5D9E4] justify-center gap-[1rem]`}>
            <p className=' font-average other-work-top-text text-[3rem]'>Ready to bring your project to life?</p>
            <Link href="/contact"><button className='bg-[#00259C] text-[18px] other-work-top-button text-[white] font-[400] border-[2px] border-[#044AFF] px-[3rem] py-[13px] rounded-[2rem]'>Contact Us</button></Link>
        </div>
        <div className='px-[1.5rem] automation-footer-nav-container pt-[6rem]'>
    <Footernav/>
        </div>
    </div>
    </>
  );
}

export default Otherwork1;
