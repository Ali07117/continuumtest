'use client'

import React, { useEffect, useRef } from 'react';
import Navbar from '../components/navbar';
import AutomationHero from '../automation/component/automationhero';
import WorkChallenge from '../components/workchallenge';
import SolutionSection from '../components/solutionsection';
import OutcomeSection from '../components/outcomesection';
import OtherWorkSection from '../components/otherworksection';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import { ScrollTrigger } from "gsap/all";
import Footernav from '../components/homesections/footernav';
import Aboutworkcards from '../about/aboutworksection/comp/aboutworkcards';
gsap.registerPlugin(ScrollTrigger)
// import LocomotiveScroll from 'locomotive-scroll';

function EnergyProvider() {
  // const locomotiveScroll = new LocomotiveScroll();


  const videoRef = useRef(null);
  useEffect(() => {

    gsap.to('#other-work-top-3-id', {
      backgroundColor:'#000',
      color: '#fff',
      scrollTrigger: {
        trigger: '#other-work-wrapper-3-id',
        start: 'top 5%',
        end: 'top 0%',
        scrub: true,
        markers: true,
        // m
      },
    }); 

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


      gsap.from(".energy-animation-1", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".energy-animation-1", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      gsap.from(".energy-animation-2", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".energy-animation-2", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      gsap.from(".energy-animation-3", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".energy-animation-3", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      gsap.from(".energy-animation-4", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".energy-animation-4", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      gsap.from(".energy-animation-5", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".energy-animation-5", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      gsap.from(".energy-animation-6", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".energy-animation-6", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      gsap.from(".energy-animation-7", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        delay: 0.4,
        scrollTrigger: {
          trigger: ".energy-animation-7", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      gsap.from(".energy-animation-8", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".energy-animation-8", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      gsap.from(".energy-animation-9", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".energy-animation-9", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      gsap.from(".energy-animation-10", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".energy-animation-10", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      gsap.from(".energy-animation-11", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".energy-animation-11", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      gsap.from(".energy-animation-12", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".energy-animation-12", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      gsap.from(".energy-animation-13", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".energy-animation-13", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      gsap.from(".energy-animation-14", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".energy-animation-14", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      // ==============================

      gsap.to(".loading-layer", {
        transform: "translateY(-200%)",
        duration: 1,
        delay: 1,
        ease: "power2.inOut",
      });
  
      gsap.to(".logo-icon-animated", {
        rotation: 360,
        duration: 1,
        ease: "slow(1,1,false)",
      });

      gsap.to(".automation-hero-video", {
        // width: '100%',
        marginLeft: '0rem',
        marginRight: '0rem',
        marginBottom: '0rem',
        // duration:0.8,
        borderRadius: '0px',
        scrollTrigger: {
          trigger: ".automation-hero-video",
          scrub: true,
          // markers:true,
          start: "top 60%",
          end: "top -70%",
        }
      });

      

    });
  return (
    <>
    <div className='h-[100vh] loading-layer w-[100%] bg-[black] fixed top-[0px] left-[0px] z-[9999] flex items-center justify-center'>
      <img className='h-[80px] logo-icon-animated' src="/images/logoicon.svg" alt="" />
    </div>
      <div className="afious-wrapper">
        <div className="automation-header pt-[14.3rem]  h-[145vh] w-[100%] bg-[--bgprimary]">
          <Navbar />
          <AutomationHero hidden={"hidden"} imgheight={"1200px"} video={"/videos/video12.mp4"} heading={"Energy Provider"} intro={"Intro"} introheading={"Mobile app for a leading robotic process automation(RPA) software company."} projectintrolabel={"Contributions"} projectintro1={"Discovery & Research"} projectintro2={"Strategy"} projectintro3={"Experience Design"} projectintro4={"Visual Design"} />
          <div className="workinfo-wrapper py-[6rem] bg-[--bgsecondry]">
            <WorkChallenge workchallengemainpara={"A leading retail electricity provider in the U.S., wanted a website that communicated its commitment to transparency, reliability, and community engagement. I led the visual design effort, ensuring the website effectively catered to both residential and business customers across multiple states, while highlighting client’s partnerships and community initiatives."} workchallengeheading={"Challenge "} workchallengepara={"We faced several challenges, including managing complex information architecture for different states and customer types, integrating the Chicago Cubs partnership while maintaining Dynegy’s professional brand, and effectively showcasing community engagement and their Total Satisfaction Guarantee."} />
          </div>
          {/* <SolutionSection  pl={"5%"} flex={"flex"} center={"center"} img={"/images/workimages/energyprovidersolutionimg.svg"} heading={"Solution"} subheading={"We employed a user-centered design approach, conducting research to understand customer needs. This led to a responsive, streamlined navigation system for easy plan comparisons, a high-conversion sign-up process, and engaging visuals that balanced professional branding with community involvement. We ensured the site was accessible and intuitive for all users."}/> */}
          <div className="solution-section-wrapper flex min-h-[20px] mt-[6rem] px-[10%]">
            <div className="solution-section-left w-[50%] h-[100%]">
              <img className='w-[100%] h-[500px] energy-animation-1 rounded-[2.5rem] object-cover' src="/images/workimages/energyprovidersolutionimg.svg" alt="" />
            </div>
            <div className="solution-section-right w-[50%] pl-[10%]">
              <div>
                <p className='text-[2rem] font-[300] energy-animation-2 font-average mt-[4rem]'>Solution</p>
                <p className='text-[20px] challenge-container-para energy-animation-3 font-inter mt-[1rem] text-[--textsecondry]'>We employed a user-centered design approach, conducting research to understand customer needs. This led to a responsive, streamlined navigation system for easy plan comparisons, a high-conversion sign-up process, and engaging visuals that balanced professional branding with community involvement. We ensured the site was accessible and intuitive for all users.</p>
              </div>
            </div>
          </div>
          <OutcomeSection heading={"Outcome"} subheading={"The redesigned website delivered a cleaner, more engaging experience for users. By focusing on clarity and ease of use, it simplified the sign-up process and effectively showcased Dynegy’s brand values, resulting in higher customer satisfaction and engagement."} />
          <div className="energy-outcome-img-section mt-[12rem] flex gap-[1rem] px-[1.5rem] min-h-[10px]">
            <div className="energy-outcome-section-left w-[50%] energy-animation-6"><img className='w-[100%]' src="/images/workimages/energy-outcome-left.svg" alt="" /></div>
            <div className="energy-outcome-section-right w-[50%] energy-animation-7"><img className='w-[100%]' src="/images/workimages/energy-outcome-right.svg" alt="" /></div>
          </div>
          <div className='mt-[2rem] tab-img-section energy-animation-8'><video
            className='m-auto'
            src="/videos/video6.mp4"
            autoPlay
            loop
            muted
            playsInline    // Ensures inline playback on iOS
            webkit-playsinline // iOS-specific attribute for inline playback
            controls={false}    // Hides video controls
            controlsList="nodownload"  // Helps block certain controls like download
            style={{ pointerEvents: 'none' }} // Disable interaction with video
          ></video></div>
          {/* <div className='mt-[4rem] step-img-section px-[10%]'><img className='w-[100%]' src="/images/workimages/energy-step-img.svg" alt="" /></div> */}
          <div className="work-result-contaier mt-[12rem] px-[10%]">
            <div className="work-result-left  w-[50%] ">
              <div className="">
                <p className='text-[2rem] font-[300] font-average energy-animation-9'>Results </p>
                <p className='text-[20px] work-result-para font-inter energy-animation-10 mt-[1rem] text-[--textsecondry]'>The revamped mobile app significantly improved user satisfaction, addressing core usability issues and enhancing mobile-specific functionality. With clearer navigation and optimized performance, the app became a more effective tool for managing bots and automations, allowing users to stay connected and in control even when away from their desktops.</p>
              </div>
            </div>
          </div>
          <div className='my-[6rem] tab-img-section energy-animation-11'><video
            className='m-auto'
            src="/videos/video12.mp4"
            autoPlay
            loop
            muted
            playsInline    // Ensures inline playback on iOS
            webkit-playsinline // iOS-specific attribute for inline playback
            controls={false}    // Hides video controls
            controlsList="nodownload"  // Helps block certain controls like download
            style={{ pointerEvents: 'none' }} // Disable interaction with video
          ></video></div>
          {/* <OtherWorkSection/> */}
          <div id='other-work-wrapper-3-id' className=" other-work-wrapper-3 bg-[--bgprimary] relative mt-[12rem] ">
    <div className="h-[12rem] bg-[white]"></div>
        <div className="other-work-upper"></div>
        <div className="other-work-section bg-[--bgprimary] pt-[5rem]">
        <p className='font-average other-work-section-heading automation-animation-19 afious-animation-13 energy-animation-12 text-[--textprimary] text-[3rem] px-[1.5rem]'>Other Work</p>
        <div className=" other-work-card-component-wrapper pt-[6rem] pb-[12rem] px-[1.5rem]">
        <Link href="/automation">
        <div className="show-img-1-box relative automation-animation-20 afious-animation-14 energy-animation-13">
        <img className=" display-700 opacity-0 show-img-1 duration-300 h-[300px] w-[420px] absolute top-[-50px] left-[10%] rounded-[8px] object-cover" src="/images/section1img.svg" alt="" />
          <Aboutworkcards pr={"25px"} border={"1px"} company={"RPA Company"} device={"Website"} beforpara={"Visual Design, Experience Design"}  />
        </div>
        </Link>
        <Link href="/afious">
        <div className="show-img-2-box relative automation-animation-21 afious-animation-15 energy-animation-14">
        <img className=" display-700 opacity-0 show-img-2 duration-300 h-[300px] w-[420px] absolute top-[-50px] left-[10%] rounded-[8px] object-cover" src="/images/workimg2.svg" alt="" />
          <Aboutworkcards company={"Afious"} device={"Mobile App"} beforpara={"Strategy, Experience Design, Visual Design"} />
        </div>
        </Link>
        </div>
        </div>

        {/* <div className={` other-work-top min-h-[105px] z-[9] w-[100%] text-[white] sticky bottom-[0] flex items-center justify-center gap-[1rem] bg-[black] `}>
            <p className=' font-average other-work-top-text text-[3rem]'>Ready to bring your project to life?</p>
            <Link href="/contact"><button className='bg-[#00259C] text-[18px] other-work-top-button text-[white] font-[400] border-[2px] border-[#044AFF] px-[3rem] py-[13px] rounded-[2rem]'>Contact Us</button></Link>
        </div> */}
        <div id='other-work-top-3-id' className={` other-work-top other-work-top-3 z-[999] min-h-[105px] w-[100%] text-[#00259C] sticky bottom-[0] flex items-center bg-[#D5D9E4] justify-center gap-[1rem]`}>
            <p className=' font-average other-work-top-text text-[3rem]'>Ready to bring your project to life?</p>
            <Link href="/contact"><button className='bg-[#00259C] text-[18px] other-work-top-button text-[white] font-[400] border-[2px] border-[#044AFF] px-[3rem] py-[13px] rounded-[2rem]'>Contact Us</button></Link>
        </div>
        <div className='px-[1.5rem] automation-footer-nav-container pt-[6rem]'>
    <Footernav/>
        </div>
    </div>
        </div>
      </div>
    </>
  );
}

export default EnergyProvider;
