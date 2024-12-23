'use client'

import React, { useEffect, useRef } from 'react';
import Navbar from '../components/navbar';
import Projectintro from '../components/projectintro';
import AutomationHero from '../automation/component/automationhero';
import WorkChallenge from '../components/workchallenge';
import SolutionSection from '../components/solutionsection';
import OutcomeSection from '../components/outcomesection';
import Link from 'next/link';
import AfiousChatSection from '../components/afiouschatsection';
import OtherWorkSection from '../components/otherworksection';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
import Footernav from '../components/homesections/footernav';
import Aboutworkcards from '../about/aboutworksection/comp/aboutworkcards';
import Head from 'next/head';
gsap.registerPlugin(ScrollTrigger)
// import LocomotiveScroll from 'locomotive-scroll';

function Afious() {
  
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

      

      gsap.from(".afious-animation-1", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".afious-animation-1", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      gsap.from(".afious-animation-2", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".afious-animation-2", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      gsap.from(".afious-animation-3", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".afious-animation-3", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      gsap.from(".afious-animation-4", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".afious-animation-4", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      gsap.from(".afious-animation-5", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".afious-animation-5", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      gsap.from(".afious-animation-6", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".afious-animation-6", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      gsap.from(".afious-animation-7", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".afious-animation-7", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      gsap.from(".afious-animation-8", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".afious-animation-8", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      gsap.from(".afious-animation-9", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".afious-animation-9", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      gsap.from(".afious-animation-10", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".afious-animation-10", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      gsap.from(".afious-animation-11", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".afious-animation-11", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      gsap.from(".afious-animation-12", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        delay: 0.4,
        scrollTrigger: {
          trigger: ".afious-animation-12", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      gsap.from(".afious-animation-13", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        delay: 0.4,
        scrollTrigger: {
          trigger: ".afious-animation-13", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      gsap.from(".afious-animation-14", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        delay: 0.4,
        scrollTrigger: {
          trigger: ".afious-animation-14", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      gsap.from(".afious-animation-15", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        delay: 0.4,
        scrollTrigger: {
          trigger: ".afious-animation-15", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      // ===================

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
        borderRadius:"0px",
        // duration:0.8,
        // borderRadius: '0rem',
        scrollTrigger: {
          trigger: ".automation-hero-video",
          scrub: true,
          // markers:true,
          start: "top 60%",
          end: "top -70%",
        }
      });

      gsap.to('#other-work-top-2-id', {
        backgroundColor: '#000',
        color:'#fff',
        scrollTrigger: {
          trigger: '#other-work-wrapper-2-id',
          start: 'top 5%',
          end: 'top 0%',
          scrub: true,
          // markers: true,
          // d
        },
      }); 

    });
    const afiousSchemaData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Afious | Leading Innovators in Tech Solutions",
      "url": "https://www.afious.com",
      "description": "Explore the Afious website, where we deliver cutting-edge technology solutions for businesses around the world.",
      "publisher": {
        "@type": "Organization",
        "name": "Afious",
        "url": "https://www.afious.com",
        "logo": "https://www.afious.com/logo.png"
      },
      "mainEntityOfPage": "https://www.afious.com",
      "image": "https://www.afious.com/afious-og-image.jpg"
    };
  return (
    <>
    <Head>
  {/* Structured Data */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(afiousSchemaData) }}
  />

  {/* Open Graph Metadata */}
  <meta property="og:title" content="Afious | Leading Innovators in Tech Solutions" />
  <meta
    property="og:description"
    content="Explore the Afious website, where we deliver cutting-edge technology solutions for businesses around the world."
  />
  <meta property="og:image" content="https://www.afious.com/afious-og-image.jpg" />
  <meta property="og:url" content="https://www.afious.com" />
  <meta property="og:type" content="website" />

  {/* Twitter Card Metadata */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Afious | Leading Innovators in Tech Solutions" />
  <meta
    name="twitter:description"
    content="Explore the Afious website, where we deliver cutting-edge technology solutions for businesses around the world."
  />
  <meta name="twitter:image" content="https://www.afious.com/afious-twitter-image.jpg" />
</Head>
    <div className='h-[100vh] loading-layer w-[100%] bg-[black] fixed top-[0px] left-[0px] z-[9999] flex items-center justify-center'>
      <img className='h-[80px] logo-icon-animated' src="/images/logoicon.svg" alt="" />
    </div>
      <div className="afious-wrapper">
        <div className="automation-header pt-[14.3rem]  h-[145vh] w-[100%] bg-[--bgprimary]">
          <Navbar />
          <AutomationHero hidden={"hidden"} imgheight={"1200px"} video={"/videos/video10.mp4"} heading={"Afious"} intro={"Intro"} introheading={"Startup re-imagining loneliness crisis on campuses by matching people based on similar interests."} projectintrolabel={"Contributions"} projectintro1={"Discovery & Research"} projectintro2={"Strategy"} projectintro3={"Experience Design"} projectintro4={"Visual Design"} />
          <div className="workinfo-wrapper py-[6rem] bg-[--bgsecondry]">
            <WorkChallenge workchallengemainpara={"Afious is a mobile app that connects college students through shared interests, addressing the growing loneliness problem on campuses exacerbated by COVID-19. Our goal was to build an intuitive platform where students could easily find peers, join clubs, and engage in campus life."} workchallengeheading={"Challenge "} workchallengepara={"The main challenge was to create a solution that felt authentic and engaging without overwhelming users. Early versions faced issues with a complex onboarding process and a generic interface that didn’t resonate with Gen Z users. The primary task was to refine the experience to enable quick and meaningful connections based on student interests."} />
          </div>
          <SolutionSection imghidden={"hidden"} pr={"12%"} video={"/videos/afious-solution-video.mp4"} heading={"Solution"} subheading={"We began with extensive interviews to validate the concept and understand student needs. Using this data, we reworked the onboarding and interest pages multiple times to ensure a seamless experience. Our efforts included designing a vibrant, modern interface that matched Gen Z aesthetics and integrating a recommendation engine to suggest relevant connections. Key features like group chats, event listings, and curated content were added to encourage interaction."} />
          <OutcomeSection heading={"Outcome"} subheading={"The redesigned app now offers a smooth user experience that helps students find connections and join groups easily. Enhanced interest pages, real-time chat, and event planning features allow for a lively community experience. The onboarding process is simple and intuitive, ensuring students can set up and start engaging within minutes."} />
          <AfiousChatSection />
          <div className="grid-section min-h-[100vh] mt-[3rem] py-[5%] px-[1.5rem] flex justify-center w-[100%] bg-[#D5D9E4]">
            <img className='w-[100%] afious-animation-8 rounded-[2.5rem] object-cover' src="/images/afiousnew.svg" alt="" />
          </div>
          <div className="result-upper-section px-[1.5rem] afious-animation-9  w-[100%] mb-[12rem] mt-[2.5rem]">
            {/* <div className="reslut-video-1-section w-[100%] h-[80vh]"> */}
              <video
                ref={videoRef}
                className='reslut-video-1-section-video rounded-[2.5rem] w-[100%] h-[100%]  object-cover'
                src="/videos/video1.mp4"
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
          {/* </div> */}
          <div className="solution-section-wrapper flex min-h-[70%]  px-[10%]">

            <div className="solution-section-right w-[50%]">
              <div>
                <p className='text-[2rem] afious-animation-10 font-[300] font-average mt-[4rem]'>Results</p>
                <p className='text-[20px] challenge-container-para afious-animation-11 font-inter mt-[1rem] text-[--textsecondry]'>Results: Afious has secured 20+ partner colleges eager to pilot the app, validating its potential for campus adoption. Initial testing showed positive feedback on ease of use and relevance of suggested connections, distinguishing Afious from other social platforms.</p>
              </div>
            </div>
            <div className="solution-section-left w-[50%] pl-[10%] afious-animation-12">
              <video
              ref={videoRef}
                className=' reslut-video-1-section-video rounded-[2.5rem] h-[90vh] object-cover w-[100%]'
                src="/videos/afious-result-video2.mp4"
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
          </div>
          {/* <OtherWorkSection classtops={"other-work-2"} classtop={"other-work-top-2"} /> */}
          <div id='other-work-wrapper-2-id' className="other-work-wrapper-2 bg-[--bgprimary] relative mt-[12rem] ">
    <div className="h-[12rem] bg-[white]"></div>
        <div className="other-work-upper"></div>
        <div className="other-work-section bg-[--bgprimary] pt-[5rem]">
        <p className='font-average other-work-section-heading automation-animation-19 afious-animation-13 energy-animation-12 text-[--textprimary] text-[3rem] px-[1.5rem]'>Other Work</p>
        <div className=" other-work-card-component-wrapper pt-[6rem] pb-[12rem] px-[1.5rem]">
        <Link href="/energyprovider">
        <div className="show-img-1-box relative automation-animation-20 afious-animation-14 energy-animation-13">
        <img className=" display-700 opacity-0 show-img-1 duration-300 h-[300px] w-[420px] absolute top-[-50px] left-[10%] rounded-[8px] object-cover" src="/images/workimg3.svg" alt="" />
          <Aboutworkcards pr={"25px"} border={"1px"} company={"Dynegy"} device={"Website"} beforpara={"Visual Design, Experience Design"}  />
        </div>
        </Link>
        <Link href="/automation">
        <div className="show-img-2-box relative automation-animation-21 afious-animation-15 energy-animation-14">
        <img className=" display-700 opacity-0 show-img-2 duration-300 h-[300px] w-[420px] absolute top-[-50px] left-[10%] rounded-[8px] object-cover" src="/images/section1img.svg" alt="" />
          <Aboutworkcards company={"RPA Company"} device={"Mobile App"} beforpara={"Strategy, Experience Design, Visual Design"} />
        </div>
        </Link>
        </div>
        </div>

        {/* <div className={` other-work-top min-h-[105px] z-[9] w-[100%] text-[white] sticky bottom-[0] flex items-center justify-center gap-[1rem] bg-[black] `}>
            <p className=' font-average other-work-top-text text-[3rem]'>Ready to bring your project to life?</p>
            <Link href="/contact"><button className='bg-[#00259C] text-[18px] other-work-top-button text-[white] font-[400] border-[2px] border-[#044AFF] px-[3rem] py-[13px] rounded-[2rem]'>Contact Us</button></Link>
        </div> */}
        <div id='other-work-top-2-id' className={` other-work-top other-work-top-2 z-[999] min-h-[105px] w-[100%] text-[#00259C] sticky bottom-[0] flex items-center bg-[#D5D9E4] justify-center gap-[1rem]`}>
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

export default Afious;
