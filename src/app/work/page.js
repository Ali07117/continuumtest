"use client"

import React from 'react';
import Navbar from '../components/navbar';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
import Worktext from './comp/worktext';
import Workimg from './comp/workimg';
import Footernav from '../components/homesections/footernav';
gsap.registerPlugin(ScrollTrigger)

function Workpage() {
  useGSAP(
    () => {
      gsap.to(".img1", {
        scale: '1',
        duration: 1,
        scrollTrigger: {
          trigger: ".img-container",
        }
      })

      let wmm = gsap.matchMedia();
      wmm.add("(min-width: 1000px)", () => {

        gsap.to(".anime-right", {
          scrollTrigger: {
            trigger: ".anime-right",
            start: "top 0%", // when the ".anime-right" hits the top of the viewport
            //   end: "bottom 100%", // scroll 100vh from the start point
            pin: true, // pins the element in place during the scroll
          }
        });

        gsap.to(".workimg", {
          opacity: 1,
          stagger: 1.5,
          scrollTrigger: {
            trigger: ".anime-right",
            start: "top 100%", // start when .anime-right reaches the top of the viewport
            end: "bottom 100%", // finish after scrolling 100vh
            scrub: true, // smooth animation on scroll
          }
        });
      });

      wmm.add("(max-width: 1000px)", () => {

        gsap.to(".anime-right", {
          scrollTrigger: {
            trigger: ".anime-right",
            start: "top 0%", // when the ".anime-right" hits the top of the viewport
            //   end: "bottom 100%", // scroll 100vh from the start point
            pin: false, // pins the element in place during the scroll
          }
        });

        gsap.to(".workimg", {
          opacity: 1,
          stagger: 0,
          scrollTrigger: {
            trigger: ".anime-right",
            start: "top 100%", // start when .anime-right reaches the top of the viewport
            end: "bottom 100%", // finish after scrolling 100vh
            scrub: false, // smooth animation on scroll
          }
        });
      });

    });
  return (
    <>
      <div className="work-wrapperd bg-[black] px-[1.5rem]">
        <Navbar />
        <h1 className='hero-heading text-[white] text-[6rem] mt-[22%] lg:mt-[40vh] text-[--textprimary] font-average'>Work </h1>
        <div className="img-container mt-[2rem] flex justify-center">
          <div className=' img1 work-hero-img rounded-[2.5rem] hero-image scale-[0] h-[100vh] w-[100%]' style={{ backgroundImage: "url(/images/heroimg1.svg)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div>
        </div>
        <h2 className='anime-text work-hero-text text-nowrap mt-[6rem] top-[0px] left-[0px] relative font-[400] text-[4.7vw] leading-[5.7vw] text-[--textprimary] font-average'>At <span className='text-[4.7vw] leading-[5.7vw] text-[#044AFF] font-average'>Continuum,</span> we create digital experiences <br /> that deliver measurable results. </h2>
        <div className=" work-anime-container  flex min-h-[100vh]">
          <div className="anime-left w-[30%] mt-[6rem] h-[100%]">
            <Worktext heading={"Robotic Process Automation"} paral={"Mobile app for a leading robotic process"} parar={"automation(RPA) software company."} point1={"Discovery & Research"} point2={"Strategy"} point3={"Experience Design"} point4={"Visual Design"} />
            <Worktext heading={"Afious"} paral={"Startup re-imagining loneliness crisis on campuses by matching people based on similar interests."} point2={"Strategy"} point3={"Experience Design"} point4={"Visual Design"} />
            <Worktext heading={"Energy Company"} paral={"Energy company's digital footprint designed to boost online service "} parar={"subscriptions and streamline customer onboarding."} point3={"Experience Design"} point4={"Visual Design"} />
            <Worktext heading={"Bank of America"} paral={"Dashboard and Mobile apps for the"} parar={"Investment Banking team."} point3={"Experience Design"} point4={"Visual Design"} point1={"Discovery & Research"} point2={"Strategy"} />
            <Worktext heading={"AT&T"} paral={"Tablet and desktop designs for the in-"} parar={"store agent experience"}  point3={"Experience Design"} point4={"Visual Design"} point1={"Discovery & Research"} point2={"Strategy"} />
            {/* <Worktext heading={"Bank of America"} para1={"Dashboard and Mobile apps for the"} para2={"Investment Banking team."} point1={"Discovery & Research"} point2={"Strategy"} point3={"Experience Design"} point4={"Visual Design"} /> */}
            {/* <Worktext heading={"AT&T"} para1={"Tablet and desktop designs for the in-"} para2={"store agent experience"} point1={"Discovery & Research"} point2={"Strategy"} point3={"Experience Design"} point4={"Visual Design"} /> */}
          </div>
          <div className="anime-right w-[70%] py-[5vh] mt-[6rem] min-h-[500vh] ">
            <Workimg img={"/images/heroimg1.svg"} />
            <div className='my-[3rem] hidden work-hidden-text-wrapper'><Worktext heading={"Robotic Process Automation"} paral={"Mobile app for a leading robotic process"} parar={"automation(RPA) software company."} point1={"Discovery & Research"} point2={"Strategy"} point3={"Experience Design"} point4={"Visual Design"} /></div>
            <Workimg img={"/images/section1img.svg"} />
            <div className='my-[3rem] hidden work-hidden-text-wrapper'><Worktext heading={"Afious"} paral={"Startup re-imagining loneliness crisis on campuses by matching people based on similar interests."} point2={"Strategy"} point3={"Experience Design"} point4={"Visual Design"} /></div>
            <Workimg img={"/images/section2img.svg"} />
            <div className='my-[3rem] hidden work-hidden-text-wrapper'><Worktext heading={"Energy Company"} paral={"Energy company's digital footprint designed to boost online service "} parar={"subscriptions and streamline customer onboarding."} point3={"Experience Design"} point4={"Visual Design"} /></div>
            <Workimg img={"/images/section1img.svg"} />
            <div className='my-[3rem] hidden work-hidden-text-wrapper'> <Worktext heading={"Bank of America"} paral={"Dashboard and Mobile apps for the"} parar={"Investment Banking team."} point3={"Experience Design"} point4={"Visual Design"} point1={"Discovery & Research"} point2={"Strategy"} /></div>
            <Workimg img={"/images/section2img.svg"} />
            <div className='my-[3rem] hidden work-hidden-text-wrapper'> <Worktext heading={"AT&T"} paral={"Tablet and desktop designs for the in-"} parar={"store agent experience"}  point3={"Experience Design"} point4={"Visual Design"} point1={"Discovery & Research"} point2={"Strategy"} /></div>
          </div>
        </div>
        <div className="bottom-logo  z-[5] relative flex justify-center mt-[12rem]"><img className='h-[16px]' src="/images/logo.svg" alt="" /></div>
        <Footernav />
      </div>
    </>
  );
}

export default Workpage;
