'use client'

import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
import Navbar from '../components/navbar';
import Projectintro from '../components/projectintro';
import AutomationHero from './component/automationhero';
import WorkInfo from '../components/workinfo';
import WorkSolutionSection from '../components/worksolutionsection';
import OtherWorkSection from '../components/otherworksection';
import Footernav from '../components/homesections/footernav';
gsap.registerPlugin(ScrollTrigger)
function Automation() {
  useGSAP(
    () => {

      gsap.to(".automation-hero-image", {
        // width: '100%',
        marginLeft:'0rem',
        marginRight:'0rem',
        // duration:0.8,
        borderRadius:'0rem',
        scrollTrigger: {
          trigger: ".automation-hero-image",
          scrub: true,
          // markers:true,
          start: "top 60%",
          end: "top 10%",
        }
      });

      let am = gsap.matchMedia();

      am.add("(min-width: 1285px)", () => {
      gsap.to(".work-result-left", {
        scrollTrigger: {
          trigger: ".work-result-left",
          start: "top top",
          end: "+=40%",
          // markers:true,
          pin: true,
        }
      });
    });

    // am.add("(min-width: 890px)", () => {

      gsap.to(".other-work-top", {
        backgroundColor:"black",
        color:"white",
        scrollTrigger: {
          trigger: ".other-work-wrapper",
          start: "top 20%",
          end: "top 30%",
          scrub:true,
          // markers: true,
        }
      // });
    });

    // am.add("(max-width: 890px)", () => {

    //   gsap.to(".other-work-top", {
    //     backgroundColor:"black",
    //     color:"white",
    //     scrollTrigger: {
    //       trigger: ".other-work-wrapper",
    //       start: "top 30%",
    //       end: "top 60%",
    //       scrub:true,
    //       markers: true,
    //     }
    //   });
    // });



    });
  return (
    <>
    <div className='automation-wrapper'>
    <div className="automation-header pb-[1rem] pt-[14.3rem]  min-h-[10vh] w-[100%] bg-[--bgprimary]">
    <Navbar/>
    <AutomationHero/>
    </div>
    <WorkInfo/>
    <div className="workmap-section px-[1.5rem]">
    <img className=' w-[100%]  workmap-section-img object-contain' src="/images/workimages/workdesignmap.svg" alt="" />
    <p className='font-inter font-[400] workmap-section-img-text text-[18px] mt-[0.5rem] text-[--textsecondry]'>Mindmap to visualize all the necessary functionality of the app</p>
    </div>
    <div className="mindmap-text-section mt-[6rem] gap-[1rem] px-[1.5rem] h-[100vh] flex">
    <div className="mindmap-text-left relative rounded-[2.3rem] font-[600] w-[65%] h-[100%] flex justify-center items-center">
    <p className='font-museoSans -text-[380px] text-[22vw]'>Aa</p>
    <div className='w-[230px] mindmap-text-left-absolute absolute bottom-[5%]'>
      <p className='text-[1.4vw] font-name font-[600] text-center font-museoSans'>Museo Sans</p>
      <p className=' text-[0.88vw] abc-text font-[600] text-center font-museoSans mt-[1.4rem]'>A a B b C c D d E e F f G g H h I i J j K k L l M m N n O o P p Q q R r S s T t U u V v W w X x Y y Z z</p>
      <p className=' text-[0.88vw] alpha-text font-[600] text-center font-museoSans mt-[0.5rem]'>1 2 3 4 5 6 7 8 9 0</p>
    </div>
    </div>
    <div className="mindmap-text-right w-[35%] h-[100%] relative">
    <div className='h-[100%] w-[100%] bg-[#FF5A10] absolute rounded-[2.3rem] z-[1]'></div>
    <div className='h-[85%] bottom-[0px] w-[100%] bg-[#FCD010] absolute rounded-[2.3rem] z-[2]'></div>
    <div className='h-[70%] bottom-[0px] w-[100%] bg-[#105FB3] absolute rounded-[2.3rem] z-[3]'></div>
    <div className='h-[55%] bottom-[0px] w-[100%] bg-[#597095] absolute rounded-[2.3rem] z-[4]'></div>
    <div className='h-[40%] bottom-[0px] w-[100%] bg-[#F2F2F2] absolute rounded-[2.3rem] z-[5]'></div>
    <div className='h-[25%] bottom-[0px] w-[100%] bg-[#04142C] absolute rounded-[2.3rem] z-[6]'></div>
    </div>
    </div>
    <p className='font-inter mindmap-bottom-text px-[1.5rem] font-[400] text-[18px] mt-[0.5rem] text-[--textsecondry]'>Mindmap to visualize all the necessary functionality of the app</p>
    <div className="work-outcome-container pl-[10%] w-[50%] mt-[12rem]">
        <p className='text-[2rem] font-[300] font-average'>Outcome</p>
        <p className='text-[20px] work-outcome-text font-inter mt-[1rem] text-[--textsecondry]'>The redesigned app featured a more intuitive user interface, with streamlined navigation and an improved login process that accommodated both cloud and on-premise solutions. Users could now easily manage automations, assign failed bots, and receive real-time updates. We also introduced filters to help users quickly access the information they needed.</p>
    </div>
        <div className=' min-h-[100vh] outcome-image-container px-[10%] mt-[6rem] flex justify-center'>
        <img className=' h-[100%] w-[100%] outcome-image' src="/images/workimages/outcome1img.svg" alt="" />
        </div>
        <div className="work-result-contaier mt-[6rem] flex pr-[1.5rem] gap-[1rem]">
        <div className="work-result-left  w-[40%] pl-[10%]">
        <div className="">
        <p className='text-[2rem] font-[300] font-average'>Results </p>
        <p className='text-[20px] work-result-para font-inter mt-[1rem] text-[--textsecondry]'>The revamped mobile app significantly improved user satisfaction, addressing core usability issues and enhancing mobile-specific functionality. With clearer navigation and optimized performance, the app became a more effective tool for managing bots and automations, allowing users to stay connected and in control even when away from their desktops.</p>
    </div>
        </div>
        <div className="work-result-right w-[60%]">
          <img className=' work-result-image  w-[100%]' src="/images/workimages/workresultimage.svg" alt="" />
        </div>
        </div>
        <OtherWorkSection/>
    </div>
    </>
  );
}

export default Automation;
