'use client'

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
import Link from 'next/link';
import Navbar from '../components/navbar';
import Projectintro from '../components/projectintro';
import AutomationHero from './component/automationhero';
import WorkInfo from '../components/workinfo';
import WorkSolutionSection from '../components/worksolutionsection';
import OtherWorkSection from '../components/otherworksection';
import Footernav from '../components/homesections/footernav';
import WorkResult from '../components/workresult';
import OutcomeSection from '../components/outcomesection';
import Aboutworkcards from '../about/aboutworksection/comp/aboutworkcards';
gsap.registerPlugin(ScrollTrigger)
// import LocomotiveScroll from 'locomotive-scroll';
function Automation() {
  // const locomotiveScroll = new LocomotiveScroll();
  
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.removeAttribute('controls');
      videoRef.current.controls = false;
    }


      (async ()=> {
  
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
      
    )()

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

  useGSAP(
    () => {

     
      // =============
      gsap.from(".automation-animation-4", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".automation-animation-4", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".automation-animation-5", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".automation-animation-5", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".automation-animation-6", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".automation-animation-6", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".automation-animation-7", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".automation-animation-7", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".automation-animation-8", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".automation-animation-8", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".automation-animation-9", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".automation-animation-9", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".automation-animation-10", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".automation-animation-10", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".automation-animation-11", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        delay: 0.4,
        scrollTrigger: {
          trigger: ".automation-animation-11", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".automation-animation-12", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".automation-animation-12", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".automation-animation-13", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".automation-animation-13", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".automation-animation-14", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".automation-animation-14", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".automation-animation-15", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".automation-animation-15", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".automation-animation-16", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".automation-animation-16", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".automation-animation-17", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".automation-animation-17", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".automation-animation-18", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".automation-animation-18", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".automation-animation-19", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".automation-animation-19", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".automation-animation-20", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".automation-animation-20", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".automation-animation-21", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".automation-animation-21", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      // =============

      gsap.to(".loading-layer", {
        transform: "translateY(-200%)",
        duration: 1,
        delay: 0.5,
        ease: "power2.inOut",
      });
  
      gsap.to(".logo-icon-animated", {
        rotation: 360,
        duration: 0.5,
        ease: "none",
      });

      gsap.to(".automation-hero-image", {
        // width: '100%',
        marginLeft: '0rem',
        marginRight: '0rem',
        marginBottom: '0rem',
        // duration:0.8,
        borderRadius: '0rem',
        scrollTrigger: {
          trigger: ".automation-hero-image",
          scrub: true,
          // markers:true,
          start: "top 60%",
          end: "top -70%",
        }
      });

      gsap.to('.other-work-top-1', {
        opacity: 0,
        display: 'none',
        scrollTrigger: {
          trigger: '.other-work-wrapper-1',
          start: 'top 100%',
          end: 'top 50%',
          scrub: true,
          // markers: true,
          // comment
          // commiit
        },
      }); 
    });
  return (
    <>
    <div className='h-[100vh] loading-layer w-[100%] bg-[black] fixed top-[0px] left-[0px] z-[9999] flex items-center justify-center'>
      <img className='h-[80px] logo-icon-animated' src="/images/logoicon.svg" alt="" />
    </div>
      <div className='automation-wrapper'>
        <div className="automation-header  pt-[14.3rem]  min-h-[10vh] w-[100%] bg-[--bgprimary]">
          <Navbar />
          <AutomationHero videohidden={"hidden"} imgheight={"95vh"} heroimg={"url(/images/section1img.svg)"} heading={"Automation Anywhere"} intro={"Intro"} introheading={"Mobile app for a leading robotic process automation(RPA) software company."} projectintrolabel={"Contributions"} projectintro1={"Discovery & Research"} projectintro2={"Strategy"} projectintro3={"Experience Design"} projectintro4={"Visual Design"} />
        </div>
        <WorkInfo />
        <div className="workmap-section px-[1.5rem]">
          <img className=' w-[100%] automation-animation-8 workmap-section-img object-contain' src="/images/workimages/workdesignmap.svg" alt="" />
          <p className='font-inter font-[400] automation-animation-9 workmap-section-img-text text-[18px] mt-[0.5rem] text-[--textsecondry]'>Mindmap to visualize all the necessary functionality of the app</p>
        </div>
        <div className="mindmap-text-section mt-[6rem] gap-[1rem] px-[1.5rem] h-[100vh] flex">
          <div className="mindmap-text-left automation-animation-10 relative rounded-[2.3rem] font-[600] w-[65%] h-[100%] flex justify-center items-center">
            <p className='font-museoSans -text-[380px] text-[22vw]'>Aa</p>
            <div className='w-[230px] mindmap-text-left-absolute absolute bottom-[5%]'>
              <p className='text-[1.4vw] font-name font-[600] text-center font-museoSans'>Museo Sans</p>
              <p className=' text-[0.88vw] abc-text font-[600] text-center font-museoSans mt-[1.4rem]'>A a B b C c D d E e F f G g H h I i J j K k L l M m N n O o P p Q q R r S s T t U u V v W w X x Y y Z z</p>
              <p className=' text-[0.88vw] alpha-text font-[600] text-center font-museoSans mt-[0.5rem]'>1 2 3 4 5 6 7 8 9 0</p>
            </div>
          </div>
          <div className="mindmap-text-right automation-animation-11 w-[35%] h-[100%] relative">
            <div className='h-[100%] w-[100%] bg-[#FF5A10] absolute rounded-[2.3rem] z-[1]'></div>
            <div className='h-[85%] bottom-[0px] w-[100%] bg-[#FCD010] absolute rounded-[2.3rem] z-[2]'></div>
            <div className='h-[70%] bottom-[0px] w-[100%] bg-[#105FB3] absolute rounded-[2.3rem] z-[3]'></div>
            <div className='h-[55%] bottom-[0px] w-[100%] bg-[#597095] absolute rounded-[2.3rem] z-[4]'></div>
            <div className='h-[40%] bottom-[0px] w-[100%] bg-[#F2F2F2] absolute rounded-[2.3rem] z-[5]'></div>
            <div className='h-[25%] bottom-[0px] w-[100%] bg-[#04142C] absolute rounded-[2.3rem] z-[6]'></div>
          </div>
        </div>
        <p className='font-inter automation-animation-12 mindmap-bottom-text px-[1.5rem] font-[400] text-[18px] mt-[0.5rem] text-[--textsecondry]'>Mindmap to visualize all the necessary functionality of the app</p>
        <OutcomeSection heading={"Outcome"} subheading={"The redesigned app featured a more intuitive user interface, with streamlined navigation and an improved login process that accommodated both cloud and on-premise solutions. Users could now easily manage automations, assign failed bots, and receive real-time updates. We also introduced filters to help users quickly access the information they needed."} />
        <div className=' min-h-[100vh] automation-animation-15 outcome-image-container px-[10%] mt-[6rem] flex justify-center'>
          {/* <img className=' h-[100%] w-[100%] outcome-image' src="/images/workimages/outcome1img.svg" alt="" /> */}
          <video
          ref={videoRef}
            className='h-[100%] rounded-[2.5rem] w-[100%] outcome-image'
            src="/videos/automation mbl-flip.mp4"
            autoPlay
            loop
            muted
            playsInline    // Ensures inline playback on iOS
            webkit-playsinline // iOS-specific attribute for inline playback
            controls={false}    // Hides video controls
            controlsList="nodownload"  // Helps block certain controls like download
            style={{ pointerEvents: 'none' }} // Disable interaction with video
          ></video>
        </div>
        <WorkResult />
        <p></p>
        {/* <OtherWorkSection classtops={"other-work-1"} classtop={"other-work-top"} /> */}
        <div className="other-work-wrapper-1 bg-[--bgprimary] relative mt-[12rem] ">
    <div className="h-[12rem] bg-[white]"></div>
        <div className="other-work-upper"></div>
        <div className="other-work-section bg-[--bgprimary] pt-[5rem]">
        <p className='font-average other-work-section-heading automation-animation-19 afious-animation-13 energy-animation-12 text-[--textprimary] text-[3rem] px-[1.5rem]'>Other Work</p>
        <div className=" other-work-card-component-wrapper pt-[6rem] pb-[12rem] px-[1.5rem]">
        <Link href="/automation">
        <div className="show-img-1-box relative automation-animation-20 afious-animation-14 energy-animation-13">
        <img className=" opacity-0 show-img-1 duration-300 h-[200px] w-[280px] absolute top-[0px] left-[15%] rounded-[8px] object-cover" src="/images/workimg2.svg" alt="" />
          <Aboutworkcards pr={"25px"} border={"1px"} company={"Dynegy"} device={"Website"} beforpara={"Visual Design, Experience Design"}  />
        </div>
        </Link>
        <Link href="/afious">
        <div className="show-img-2-box relative automation-animation-21 afious-animation-15 energy-animation-14">
        <img className=" opacity-0 show-img-2 duration-300 h-[200px] w-[280px] absolute top-[-100%] left-[15%] rounded-[8px] object-cover" src="/images/workimg3.svg" alt="" />
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
      </div>
    </>
  );
}

export default Automation;
