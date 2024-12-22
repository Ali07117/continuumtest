"use client"

import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Head from "next/head";
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
// import LocomotiveScroll from 'locomotive-scroll';


gsap.registerPlugin(ScrollTrigger)

function Home() {
  // const locomotiveScroll = new LocomotiveScroll();
  // s


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
    
  }, []);

  useGSAP(
    () => {
    
      gsap.from(".home-animation-1", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".home-animation-1", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".home-animation-1-b", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".home-animation-1-b", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".home-animation-1-c", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".home-animation-1-b", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".aboutus-text", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".aboutus-text", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".aboutus-para", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".aboutus-para", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".marquee-heading-text", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".marquee-heading-text", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".capabilities-text-heading", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".capabilities-text-heading", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".capabilities-text-box-1", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".capabilities-text-box-1", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".capabilities-text-box-2", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        delay: 0.4,
        scrollTrigger: {
          trigger: ".capabilities-text-box-2", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".capabilities-text-box-3", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".capabilities-text-box-3", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".capabilities-text-box-4", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        delay: 0.4,
        scrollTrigger: {
          trigger: ".capabilities-text-box-4", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".capabilities-arrow-link", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        delay: 0.4,
        scrollTrigger: {
          trigger: ".capabilities-arrow-link", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".contact-heading-text", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        delay: 0.4,
        scrollTrigger: {
          trigger: ".contact-heading-text", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".contact-sub-heading-text", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        delay: 0.4,
        scrollTrigger: {
          trigger: ".contact-sub-heading-text", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".contact-para-text", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        delay: 0.4,
        scrollTrigger: {
          trigger: ".contact-para-text", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".home-animation-2", // Element that triggers the timeline
          start: "top 80%",            // Start animation when the element enters viewport
          end: "end 80%",              // End animation after reaching this point
          // markers: true,               // Enable markers for debugging
        }
      });

      tl.from(".home-animation-2", {
        y: "30px",    // Start the element 50px down
        opacity: 0,   // Start with 0 opacity
        duration: 0.4, // Animation duration
        ease:"none",
      })
      tl.from(".home-animation-3", {
        y: "30px",    // Start the element 50px down
        opacity: 0,   // Start with 0 opacity
        duration: 0.4, // Animation duration
        ease:"none",
      })
      tl.from(".home-animation-4", {
        y: "30px",    // Start the element 50px down
        opacity: 0,   // Start with 0 opacity
        duration: 0.4, // Animation duration
        ease:"none",
      })
      
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".home-animation-2-b", // Element that triggers the timeline
          start: "top 80%",            // Start animation when the element enters viewport
          end: "end 80%",              // End animation after reaching this point
          // markers: true,               // Enable markers for debugging
        }
      });

      tl2.from(".home-animation-2-b", {
        y: "30px",    // Start the element 50px down
        opacity: 0,   // Start with 0 opacity
        duration: 0.4, // Animation duration
        ease:"none",
      })
      tl2.from(".home-animation-3-b", {
        y: "30px",    // Start the element 50px down
        opacity: 0,   // Start with 0 opacity
        duration: 0.4, // Animation duration
        ease:"none",
      })
      tl2.from(".home-animation-4-b", {
        y: "30px",    // Start the element 50px down
        opacity: 0,   // Start with 0 opacity
        duration: 0.4, // Animation duration
        ease:"none",
      })
      
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".home-animation-2-c", // Element that triggers the timeline
          start: "top 80%",            // Start animation when the element enters viewport
          end: "end 80%",              // End animation after reaching this point
          // markers: true,               // Enable markers for debugging
        }
      });

      tl3.from(".home-animation-2-c", {
        y: "30px",    // Start the element 50px down
        opacity: 0,   // Start with 0 opacity
        duration: 0.4, // Animation duration
        ease:"none",
      })
      tl3.from(".home-animation-3-c", {
        y: "30px",    // Start the element 50px down
        opacity: 0,   // Start with 0 opacity
        duration: 0.4, // Animation duration
        ease:"none",
      })
      tl3.from(".home-animation-4-c", {
        y: "30px",    // Start the element 50px down
        opacity: 0,   // Start with 0 opacity
        duration: 0.4, // Animation duration
        ease:"none",
      })

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

  const homeSchemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Home | Continuum Design Labs",
    "url": "https://www.continuumdesignlabs.com",
    "description": "Welcome to Continuum Design Labs, a UX design agency in New York focused on creating innovative and user-centric design solutions.",
    "publisher": {
      "@type": "Organization",
      "name": "Continuum Design Labs",
      "url": "https://www.continuumdesignlabs.com",
      "logo": "https://www.continuumdesignlabs.com/logo.png"
    },
    "mainEntityOfPage": "https://www.continuumdesignlabs.com",
    "image": "https://www.continuumdesignlabs.com/home-banner.jpg"
  };

  return (
    <>
    <Head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchemaData) }}
        />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="Home | Continuum Design Labs" />
        <meta
          property="og:description"
          content="Welcome to Continuum Design Labs, a UX design agency in New York focused on creating innovative and user-centric design solutions."
        />
        <meta property="og:image" content="https://www.continuumdesignlabs.com/home-og-image.jpg" />
        <meta property="og:url" content="https://www.continuumdesignlabs.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | Continuum Design Labs" />
        <meta
          name="twitter:description"
          content="Welcome to Continuum Design Labs, a UX design agency in New York delivering innovative and user-centric design solutions."
        />
        <meta name="twitter:image" content="https://www.continuumdesignlabs.com/home-twitter-image.jpg" />
      </Head>
    <div className="fixed z-[1] blur-[15px] events-pointer-none top-0 left-0 w-full h-[100vh]" style={{zIndex:"1"}}>
      {/* <FluidBubble /> */}
      <MagicMouseComponent/>
    </div>
  <div style={{zIndex:"10"}}>

    <div className='h-[100vh] loading-layer w-[100%] bg-[black] fixed top-[0px] left-[0px] ralative z-[9999] flex items-center justify-center'>
      <img className='h-[80px] logo-icon-animated' src="/images/logoicon.svg" alt="" />
    </div>
    <div className='bg-[black]'>
        <Navbar />
      <div className="relative z-[48] pt-[13.5rem] home-wrapper bg-transparent h-[100%] px-[1.5rem] w-[100%]" style={{ backgroundImage: "url(/images/home-herso.svg)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <p className=" z-[20] anime-1 hero-heading w-[90%] h1-heading home-heading font-average font-[400] before-1800 text-[7.6vw] leading-[8vw]  text-[--textprimary]">Increasing human potential through design.</p>
        <p className=" z-[20] anime-1 hero-heading w-[90%] h1-heading home-heading font-average font-[400] after-1800 hidden text-[7.6vw] leading-[8vw]  text-[--textprimary]">Increasing human potential</p>
        <p className=" z-[20] anime-1 hero-heading w-[90%] h1-heading home-heading font-average font-[400] after-1800 hidden text-[7.6vw] leading-[8vw]  text-[--textprimary]">through design.</p>
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
    </div>
    <div className=' bg-[black]'>
    <div className='relative z-[48]'>

{/* ================================================================================================================================================================================== */}
    
      <Homesection1 ani2={"home-animation-2"} ani3={"home-animation-3"} ani4={"home-animation-4"} ani1={"home-animation-1"} link={"/automation"} titlept={"0rem"} containerclass={"img-container2"} imgclass={"img2"} img={"/videos/video3.mp4"} pt={"6rem"} maintitle={"Selected Work"} title={"Mobile Interface for Robotic Process Automation"} cta={"View Case Study"} para1={"Mobile app for a leading robotic process automation(RPA) software company."} para2={"Discovery & Research Strategy Experience Design Visual Design"} />
      <Homesection1 ani2={"home-animation-2-b"} ani3={"home-animation-3-b"} ani4={"home-animation-4-b"} ani1={"home-animation-1-b"} link={"/afious"} containerclass={"img-container3"} imgclass={"img3"} img={"/videos/video1.mp4"} pt={"6rem"} title={"Afious"} cta={"View Case Study"} para1={"Startup re-imagining loneliness crisis on campuses by matching people based on similar interests."} para2={"Discovery & Research Strategy Experience Design Visual Design"} />
      <Homesection1 ani2={"home-animation-2-c"} ani3={"home-animation-3-c"} ani4={"home-animation-4-c"} ani1={"home-animation-1-c"} link={"/energyprovider"} pb={"6rem"} containerclass={"img-container4"} imgclass={"img4"} img={"/videos/video4.mp4"} pt={"6rem"} title={"Energy Company’s Digital Presence"} cta={"View Case Study"} para1={"Energy company's digital footprint designed to boost online service subscriptions and streamline customer onboarding."} para2={"Discovery & Research Strategy Experience Design Visual Design"} />

{/* ================================================================================================================================================================================== */}

      <Homeaboutsection />
      <Homemarquee bgwrapper={"#fff"} bg={"#fff"} text={"--textsecondry"} />
      <Capabilities bg={"#D5D9E4"} arrowimg={"/images/blackarrow.svg"} capabgif1={"/images/accessbility.gif"} capabgif2={"/images/expert recomendation.gif"} capabgif3={"/images/evaluation.gif"} capabgif4={"/images/user satisfaction.gif"}/>
      <Contactsection bg={""} />
    </div>
    </div>
  </div>
    </>
  );
}

export default Home;
