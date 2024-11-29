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
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)
// import LocomotiveScroll from 'locomotive-scroll';

function EnergyProvider() {
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


    gsap.to('.other-work-top-3', {
      backgroundColor: 'black',
      color: 'white',
      scrollTrigger: {
        trigger: '.other-work-top-3',
        start: 'top+=200 bottom', // Start 200px into the element
        end: 'bottom+=200 bottom', // End 200px past the element
        scrub: true, // Smooth scrubbing
      },
    });

  }, []);

  useGSAP(
    () => {


      // ==============================

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
        delay: 0.5,
        ease: "power2.inOut",
      });
  
      gsap.to(".logo-icon-animated", {
        rotation: 360,
        duration: 0.5,
        ease: "none",
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
          <OtherWorkSection classtop={"other-work-top-3"} />
        </div>
      </div>
    </>
  );
}

export default EnergyProvider;
