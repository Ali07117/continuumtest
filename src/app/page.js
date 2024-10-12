"use client"

import Link from 'next/link';
import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Navbar from './components/navbar';
import { ScrollTrigger } from "gsap/all";
import Homesection1 from './components/homesections/homesection1';
import Homeaboutsection from './components/homesections/homeaboutsection';
import Homemarquee from './components/homesections/homemarquee';
import Capabilities from './components/homesections/capabilities';
import Contactsection from './components/homesections/contactsection';
gsap.registerPlugin(ScrollTrigger)

function Home() {
  useGSAP(
    () => {
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
          start: "top 55%",
          end: "top 0%",
        }
      })

      gsap.to(".img3", {
        scale: '1',
        duration: 1,
        scrollTrigger: {
          trigger: ".img-container3",
          scrub: true,
          start: "top center",
          start: "top 55%",
          end: "top 0%",
        }
      })

      gsap.to(".img4", {
        scale: '1',
        duration: 1,
        scrollTrigger: {
          trigger: ".img-container4",
          scrub: true,
          start: "top 55%",
          end: "top 0%",
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
      <div className="relative pt-[14.3rem] home-wrapper bg-[black] h-[100%] px-[1.5rem] w-[100%]" style={{ backgroundImage: "url(/images/home-hero.svg)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <Navbar />
        <p className="   hero-heading w-[90%] font-average font-[400] leading-[7vw] text-[5.8vw]  text-[--textprimary]">Increasing human potential through design.</p>
        <p className=" mt-[4rem] hero-sub-heading w-[95%] text-[2rem] leading-[3rem] font-[400] font-inter font-[200] text-[--textprimary]">At Continuum, we drive forward-thinking solutions that empower people and transform ideas into impactful realities.</p>
        <div className="img-container mt-[2rem] flex justify-center">
          <div className=' img1 rounded-[2.5rem] hero-image scale-[0] h-[100vh] w-[100%]' style={{ backgroundImage: "url(/images/heroimg1.svg)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div>
        </div>
      </div>
      <Homesection1 titlept={"0rem"} containerclass={"img-container2"} imgclass={"img2"} img={"/images/section1img.svg"} pt={"6rem"} maintitle={"Selected Work"} title={"Mobile Interface for Robotic Process Automation"} cta={"Request Case Study"} para1={"Mobile app for a leading robotic process automation(RPA) software company."} para2={"Discovery & Research Strategy Experience Design Visual Design"} />
      <Homesection1 containerclass={"img-container3"} imgclass={"img3"} img={"/images/section2img.svg"} pt={"6rem"} title={"Afious"} cta={"Request Case Study"} para1={"Startup re-imagining loneliness crisis on campuses by matching people based on similar interests."} para2={"Discovery & Research Strategy Experience Design Visual Design"} />
      <Homesection1 pb={"6rem"} containerclass={"img-container4"} imgclass={"img4"} img={"/images/section2img.svg"} pt={"6rem"} title={"Energy Company’s Digital Presence"} cta={"Request Case Study"} para1={"Energy company's digital footprint designed to boost online service subscriptions and streamline customer onboarding."} para2={"Discovery & Research Strategy Experience Design Visual Design"} />
      <Homeaboutsection />
      <Homemarquee bg={"#fff"} text={"--textsecondry"} />
      <Capabilities bg={"#D5D9E4"} />
      <Contactsection bg={"/images/home-hero.svg"} />
    </>
  );
}

export default Home;
