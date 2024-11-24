'use client'

import React, { useEffect, useRef } from 'react';
import Navbar from '../components/navbar';
import Projectintro from '../components/projectintro';
import AutomationHero from '../automation/component/automationhero';
import WorkChallenge from '../components/workchallenge';
import SolutionSection from '../components/solutionsection';
import OutcomeSection from '../components/outcomesection';
import AfiousChatSection from '../components/afiouschatsection';
import OtherWorkSection from '../components/otherworksection';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();

function Afious() {


  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.removeAttribute('controls');
      videoRef.current.controls = false;
    }
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
    });
  return (
    <>
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
            <img className='w-[100%] rounded-[2.5rem] object-cover' src="/images/gridimg.svg" alt="" />
          </div>
          <div className="result-upper-section px-[1.5rem]   w-[100%] mb-[12rem] mt-[2.5rem]">
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
                <p className='text-[2rem] font-[300] font-average mt-[4rem]'>Results</p>
                <p className='text-[20px] challenge-container-para font-inter mt-[1rem] text-[--textsecondry]'>Results: Afious has secured 20+ partner colleges eager to pilot the app, validating its potential for campus adoption. Initial testing showed positive feedback on ease of use and relevance of suggested connections, distinguishing Afious from other social platforms.</p>
              </div>
            </div>
            <div className="solution-section-left w-[50%] pl-[10%]">
              <video
              ref={videoRef}
                className='rounded-[2.5rem] h-[90vh] object-cover w-[100%]'
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
          <OtherWorkSection />
        </div>
      </div>
    </>
  );
}

export default Afious;
