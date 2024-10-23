'use client'

import React from 'react';
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

function EnergyProvider() {
  useGSAP(
    () => {

      gsap.to(".automation-hero-video", {
        // width: '100%',
        marginLeft: '0rem',
        marginRight: '0rem',
        marginBottom: '0rem',
        // duration:0.8,
        borderRadius: '0rem',
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
      <div className="afious-wrapper">
        <div className="automation-header pt-[14.3rem]  h-[145vh] w-[100%] bg-[--bgprimary]">
          <Navbar />
          <AutomationHero hidden={"hidden"} imgheight={"1200px"} video={"/videos/energy-hero-video.mp4"} heading={"Energy Provider"} intro={"Intro"} introheading={"Mobile app for a leading robotic process automation(RPA) software company."} projectintrolabel={"Contributions"} projectintro1={"Discovery & Research"} projectintro2={"Strategy"} projectintro3={"Experience Design"} projectintro4={"Visual Design"} />
          <div className="workinfo-wrapper py-[6rem] bg-[--bgsecondry]">
            <WorkChallenge workchallengemainpara={"A leading retail electricity provider in the U.S., wanted a website that communicated its commitment to transparency, reliability, and community engagement. I led the visual design effort, ensuring the website effectively catered to both residential and business customers across multiple states, while highlighting client’s partnerships and community initiatives."} workchallengeheading={"Challenge "} workchallengepara={"We faced several challenges, including managing complex information architecture for different states and customer types, integrating the Chicago Cubs partnership while maintaining Dynegy’s professional brand, and effectively showcasing community engagement and their Total Satisfaction Guarantee."} />
          </div>
          {/* <SolutionSection  pl={"5%"} flex={"flex"} center={"center"} img={"/images/workimages/energyprovidersolutionimg.svg"} heading={"Solution"} subheading={"We employed a user-centered design approach, conducting research to understand customer needs. This led to a responsive, streamlined navigation system for easy plan comparisons, a high-conversion sign-up process, and engaging visuals that balanced professional branding with community involvement. We ensured the site was accessible and intuitive for all users."}/> */}
          <div className="solution-section-wrapper flex min-h-[20px] mt-[6rem] px-[10%]">
            <div className="solution-section-left w-[50%] h-[100%]">
              <img className='w-[100%] h-[500px] rounded-[2.5rem] object-cover' src="/images/workimages/energyprovidersolutionimg.svg" alt="" />
            </div>
            <div className="solution-section-right w-[50%] pl-[10%]">
              <div>
                <p className='text-[2rem] font-[300] font-average mt-[4rem]'>Solution</p>
                <p className='text-[20px] challenge-container-para font-inter mt-[1rem] text-[--textsecondry]'>We employed a user-centered design approach, conducting research to understand customer needs. This led to a responsive, streamlined navigation system for easy plan comparisons, a high-conversion sign-up process, and engaging visuals that balanced professional branding with community involvement. We ensured the site was accessible and intuitive for all users.</p>
              </div>
            </div>
          </div>
          <OutcomeSection heading={"Outcome"} subheading={"The redesigned website delivered a cleaner, more engaging experience for users. By focusing on clarity and ease of use, it simplified the sign-up process and effectively showcased Dynegy’s brand values, resulting in higher customer satisfaction and engagement."} />
          <div className="energy-outcome-img-section mt-[12rem] flex gap-[1rem] px-[1.5rem] min-h-[10px]">
          <div className="energy-outcome-section-left w-[50%]"><img className='w-[100%]' src="/images/workimages/energy-outcome-left.svg" alt="" /></div>
          <div className="energy-outcome-section-right w-[50%]"><img className='w-[100%]' src="/images/workimages/energy-outcome-right.svg" alt="" /></div>
          </div>
          <div className='mt-[2rem] tab-img-section'><video 
          className='m-auto'
          src="/videos/tab-video.mp4"  
          autoPlay 
                loop 
                muted></video></div>
          <div className='mt-[4rem] step-img-section px-[10%]'><img className='w-[100%]' src="/images/workimages/energy-step-img.svg" alt="" /></div>
          <div className="work-result-contaier mt-[12rem] px-[10%]">
        <div className="work-result-left  w-[50%] ">
        <div className="">
        <p className='text-[2rem] font-[300] font-average'>Results </p>
        <p className='text-[20px] work-result-para font-inter mt-[1rem] text-[--textsecondry]'>The revamped mobile app significantly improved user satisfaction, addressing core usability issues and enhancing mobile-specific functionality. With clearer navigation and optimized performance, the app became a more effective tool for managing bots and automations, allowing users to stay connected and in control even when away from their desktops.</p>
    </div>
        </div>
        </div>
        <OtherWorkSection/>
        </div>
      </div>
    </>
  );
}

export default EnergyProvider;
