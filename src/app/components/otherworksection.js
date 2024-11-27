import React, { useEffect }  from "react";
import Aboutworkcards from '../about/aboutworksection/comp/aboutworkcards';
import Footernav from './homesections/footernav';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

function OtherWorkSection(props) {

  

  //   useGSAP(
  //     () => {
  
  //   gsap.to(".other-work-top", {
  //     backgroundColor: "black",
  //     color: "white",
  //     scrollTrigger: {
  //       trigger: ".other-work-wrapper",
  //       start: "top 60%",
  //       end: "top 30%",
  //       scrub: 0.2,
  //       markers: true,
  //     }
  //   });
  // });

  // useEffect(() => {

  //   let showImg1Box = document.querySelector(".show-img-1-box");
  //   let showImg2Box = document.querySelector(".show-img-2-box");
  //   let showImg1 = document.querySelector(".show-img-1");
  //   let showImg2 = document.querySelector(".show-img-2");
  
  //   showImg1Box.addEventListener("mouseenter",function(){
  //     showImg1.style.opacity="1";
  //   })
  //   showImg1Box.addEventListener("mouseleave",function(){
  //     showImg1.style.opacity="0";
  //   })
  
  //   showImg2Box.addEventListener("mouseenter",function(){
  //     showImg2.style.opacity="1";
  //   })
  //   showImg2Box.addEventListener("mouseleave",function(){
  //     showImg2.style.opacity="0";
  //   })

  //   const animation = gsap.to(".other-work-top", {
  //     backgroundColor: "black",
  //     color: "white",
  //     duration:0.4,
  //     scrollTrigger: {
  //       trigger: ".other-work-wrapper",
  //       start: "top 80%",
  //       end: "top 30%",
  //       scrub: 0.2,
  //       // markers: true, // Display markers for debugging
  //     },
  //   });

  //   // Cleanup function to kill animation and its associated ScrollTrigger
  //   return () => {
  //     if (animation.scrollTrigger) {
  //       animation.scrollTrigger.kill(); // Properly kill the ScrollTrigger instance
  //     }
  //     animation.kill(); // Kill the GSAP animation itself
  //   };
  // }, []);
 
useEffect(() => { 
  
  let showImg1Box = document.querySelector(".show-img-1-box");
    let showImg2Box = document.querySelector(".show-img-2-box");
    let showImg1 = document.querySelector(".show-img-1");
    let showImg2 = document.querySelector(".show-img-2");
    let otherWorkTop = document.querySelector(".other-work-top");
    let otherWorkSection = document.querySelector(".other-work-section");


  
    showImg1Box.addEventListener("mouseenter",function(){
      showImg1.style.opacity="1";
    })
    showImg1Box.addEventListener("mouseleave",function(){
      showImg1.style.opacity="0";
    })
  
    showImg2Box.addEventListener("mouseenter",function(){
      showImg2.style.opacity="1";
    })
    showImg2Box.addEventListener("mouseleave",function(){
      showImg2.style.opacity="0";
    })

    

    
  
    }, []);

 
  return (
    <>
    a
    <div className="other-work-wrapper sticky top-[0px] bg-[--bgprimary] relative mt-[12rem] ">
    <div className="h-[12rem] bg-[white]"></div>
    {/* <div className="other-work-top h-[13vh] w-[100%] bg-[#D5D9E4] flex items-center justify-center gap-[1rem]">
            <p className='text-[#00259C] font-average text-[3rem]'>Ready to bring your project to life?</p>
            <button className='bg-[#00259C] text-[18px] text-[white] font-[400] border-[2px] border-[#044AFF] px-[3rem] py-[13px] rounded-[2rem]'>Contact Us</button>
        </div> */}
        {/* <p className="text-[red]">ss</p> */}
        <div className="other-work-section bg-[--bgprimary] pt-[5rem]">
        <p className='font-average other-work-section-heading automation-animation-19 afious-animation-13 energy-animation-12 text-[--textprimary] text-[3rem] px-[1.5rem]'>Other Work</p>
        <div className=" other-work-card-component-wrapper pt-[6rem] pb-[12rem] px-[1.5rem]">
        <div className="show-img-1-box relative automation-animation-20 afious-animation-14 energy-animation-13">
        <img className=" opacity-0 show-img-1 duration-300 h-[200px] w-[280px] absolute top-[0px] left-[15%] rounded-[8px] object-cover" src="/images/workimg2.svg" alt="" />
          <Aboutworkcards pr={"25px"} border={"1px"} company={"Dynegy"} device={"Website"} beforpara={"Visual Design, Experience Design"}  />
        </div>
        <div className="show-img-2-box relative automation-animation-21 afious-animation-15 energy-animation-14">
        <img className=" opacity-0 show-img-2 duration-300 h-[200px] w-[280px] absolute top-[-100%] left-[15%] rounded-[8px] object-cover" src="/images/workimg3.svg" alt="" />
          <Aboutworkcards company={"Afious"} device={"Mobile App"} beforpara={"Strategy, Experience Design, Visual Design"} />
        </div>
        </div>
        </div>
        <div className={` ${props.classtop} min-h-[105px] w-[100%] text-[#00259C] sticky bottom-[0] flex items-center justify-center gap-[1rem]`} style={{backgroundColor:"#D5D9E4"}}>
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

export default OtherWorkSection;
