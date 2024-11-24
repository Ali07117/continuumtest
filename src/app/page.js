"use client"

import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Navbar from './components/navbar';
import { ScrollTrigger } from "gsap/all";
import Homesection1 from './components/homesections/homesection1';
import Homeaboutsection from './components/homesections/homeaboutsection';
import Homemarquee from './components/homesections/homemarquee';
import Capabilities from './components/homesections/capabilities';
import Contactsection from './components/homesections/contactsection';
import FluidBubble from './components/FluidBubble';
import MagicMouseComponent from './components/MagicMouseComponent';
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();
import "locomotive-scroll/dist/locomotive-scroll.css"; // Ensure styles are applied

gsap.registerPlugin(ScrollTrigger)

function Home() {

  const videoRef = useRef(null);
  const scrollRef = useRef(null); // Reference for the scroll container
  const locomotiveScroll = useRef(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.removeAttribute('controls');
      videoRef.current.controls = false;
    }
     // Initialize LocomotiveScroll
    locomotiveScroll.current = new LocomotiveScroll({
      el: scrollRef.current, // Target the scrolling container
      smooth: true,          // Enable smooth scrolling
      multiplier: 0.3,       // Adjust scroll speed (lower = slower)
      lerp: 0.05,            // Smoother transitions (lower = smoother)
    });
    
  }, []);

  useGSAP(
    () => {
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

      gsap.from(".anime-1", {
        y: '50px',
        // stagger: 1,
        opacity: 0,
        duration: 1,
      });

      gsap.to(".img1", {
        scale: '1',
        duration: 1,
        scrollTrigger: {
          trigger: ".img-container",
        }
      })

      gsap.to(".img2", {
        scale: '1',
        duration: 1,
        scrollTrigger: {
          trigger: ".img-container2",
          scrub: true,
          start: "top 80%",
          end: "top 10%",
        }
      })

      gsap.to(".img3", {
        scale: '1',
        duration: 1,
        scrollTrigger: {
          trigger: ".img-container3",
          scrub: true,
          start: "top center",
          start: "top 80%",
          end: "top 10%",
        }
      })

      gsap.to(".img4", {
        scale: '1',
        duration: 1,
        scrollTrigger: {
          trigger: ".img-container4",
          scrub: true,
          start: "top 80%",
          end: "top 10%",
        }
      })



      let mm = gsap.matchMedia(); // Create a GSAP matchMedia instance

      mm.add("(min-width: 1285px)", () => {
        // Animations or ScrollTrigger for screens wider than 768px
        gsap.to(".homeabout-left", {
          scrollTrigger: {
            trigger: ".homeabout-left",
            start: "top top",
            end: "+=420",
            pin: true,
          }
        });
      });
      // Add another media query for smaller screens, if needed
      mm.add("(max-width: 1285px)", () => {
        // Define different animations or disable them for smaller screens
        gsap.to(".homeabout-left", {
          scrollTrigger: {
            trigger: ".homeabout-left",
            start: "top top",
            end: "+=0", // Shorten end for smaller screens             
            pin: false, // Disable pin for smaller screens                
          }
        });
      });

      gsap.to(".marquee-inner-container", {
        x: "-100%",
        duration: 15,
        ease: "linear",
        repeat: -1,
        mixBlendMode: 'luminosity',
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % (document.querySelector(".marquee-container").scrollWidth)) // Seamless looping
        }
      });
    }
  );
  return (
    <>
    <div className="fixed z-[1] blur-[15px] events-pointer-none top-0 left-0 w-full h-[100vh]" style={{zIndex:"1"}}>
      {/* <FluidBubble /> */}
      <MagicMouseComponent/>
    </div>
  <div style={{zIndex:"10"}}>

    <div className='h-[100vh] loading-layer w-[100%] bg-[black] fixed top-[0px] left-[0px] ralative z-[9999] flex items-center justify-center'>
      <img className='h-[80px] logo-icon-animated' src="/images/logoicon.svg" alt="" />
    </div>
      <div className="relative pt-[14.3rem] home-wrapper bg-black h-[100%] px-[1.5rem] w-[100%]" style={{ backgroundImage: "url(/images/home-herso.svg)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <Navbar />
        <p className=" z-[20] anime-1 hero-heading w-[90%] font-average font-[400] text-[7.6vw] leading-[8vw]  text-[--textprimary]">Increasing human potential through design.</p>
        <p className=" z-[20] anime-1 mt-[2rem] hero-sub-heading w-[95%] text-[2rem] leading-[3rem] font-[400] font-inter font-[200] text-[--textprimary]">At Continuum, we drive forward-thinking solutions that empower people and transform ideas into impactful realities.</p>
        <div className="img-container mt-[2rem] flex justify-center">
        <video
            ref={videoRef}
            className={` img1 rounded-[2.5rem] hero-image scale-[0] object-cover h-[100vh] w-[100%]`}
            src="/videos/video13.mp4"
            autoPlay
            loop
            muted
            playsInline    // Ensures inline playback on iOS
            webkit-playsinline // iOS-specific attribute for inline playback
            controls={false}    // Hides video controls
            controlsList="nodownload"  // Helps block certain controls like download
            style={{ pointerEvents: 'none' }} // Disable interaction with video
          ></video>
          {/* <div className=' img1 rounded-[2.5rem] hero-image scale-[0] h-[100vh] w-[100%]' style={{ backgroundImage: "url(/images/heroimg1.svg)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div> */}
        </div>
      </div>
      <Homesection1 link={"/automation"} titlept={"0rem"} containerclass={"img-container2"} imgclass={"img2"} img={"/videos/video3.mp4"} pt={"6rem"} maintitle={"Selected Work"} title={"Mobile Interface for Robotic Process Automation"} cta={"View Case Study"} para1={"Mobile app for a leading robotic process automation(RPA) software company."} para2={"Discovery & Research Strategy Experience Design Visual Design"} />
      <Homesection1 link={"/afious"} containerclass={"img-container3"} imgclass={"img3"} img={"/videos/video1.mp4"} pt={"6rem"} title={"Afious"} cta={"View Case Study"} para1={"Startup re-imagining loneliness crisis on campuses by matching people based on similar interests."} para2={"Discovery & Research Strategy Experience Design Visual Design"} />
      <Homesection1 link={"/energyprovider"} pb={"6rem"} containerclass={"img-container4"} imgclass={"img4"} img={"/videos/video4.mp4"} pt={"6rem"} title={"Energy Company’s Digital Presence"} cta={"View Case Study"} para1={"Energy company's digital footprint designed to boost online service subscriptions and streamline customer onboarding."} para2={"Discovery & Research Strategy Experience Design Visual Design"} />
      <Homeaboutsection />
      <Homemarquee bg={"#fff"} text={"--textsecondry"} />
      <Capabilities bg={"#D5D9E4"} arrowimg={"/images/blackarrow.svg"} capabgif1={"/images/accessbility.gif"} capabgif2={"/images/expert recomendation.gif"} capabgif3={"/images/evaluation.gif"} capabgif4={"/images/user satisfaction.gif"}/>
      <Contactsection bg={"/images/home-hero.svg"} />
  </div>
    </>
  );
}

export default Home;
