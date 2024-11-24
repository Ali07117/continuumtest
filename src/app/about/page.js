"use client"

import Link from 'next/link';
import React from 'react';
import Navbar from '../components/navbar';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
import Aboutsectionabout from './aboutaboutsection/aboutsectionabout';
import Capabilities from '../components/homesections/capabilities';
import Aboutcapabilities from './aboutcapabilitiessection/aboutcapabilities';
import Aboutworksection from './aboutworksection/aboutworksection';
import Homemarquee from '../components/homesections/homemarquee';
import Contactsection from '../components/homesections/contactsection';
import Howwework from './abouthowwework/howwework';
gsap.registerPlugin(ScrollTrigger)

function about() {
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

      gsap.to(".aboutimg1", {
        scale: '1',
        duration: 1,
        scrollTrigger: {
          trigger: ".img-container",
        }
      })

      let ta = gsap.matchMedia();
      ta.add("(max-width: 650px)", () => {
        gsap.to(".stroke", {
          width: "100%", // Animate the width to 100%
          // duration: 1, // Adjust the animation duration if needed
          stagger: 0.5, // Delay each animation by 0.2 seconds
          scrollTrigger: {
            trigger: ".about-wrapper",
            scrub: true, // Link the animation to the scroll position
            // markers: true, // Shows markers to visualize scroll trigger points (remove for production)
            start: "top 0%",
            end: "top -45%",
          }
        });
      });
      ta.add("(min-width: 650px)", () => {
        gsap.to(".stroke", {
          width: "100%", // Animate the width to 100%
          // duration: 1, // Adjust the animation duration if needed
          stagger: 0.5, // Delay each animation by 0.2 seconds
          scrollTrigger: {
            trigger: ".about-wrapper",
            scrub: true, // Link the animation to the scroll position
            // markers: true, // Shows markers to visualize scroll trigger points (remove for production)
            start: "top 0%",
            end: "top -80%",
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
    });
  return (
    <>
    <div className='h-[100vh] loading-layer w-[100%] bg-[black] fixed top-[0px] left-[0px] z-[9999] flex items-center justify-center'>
      <img className='h-[80px] logo-icon-animated' src="/images/logoicon.svg" alt="" />
    </div>
      <div className="aboutpagewrapper bg-[black]">
        <Aboutsectionabout />
        <Capabilities bg={"#000"} textcol={"--textprimary"} arrowimg={"/images/aboutpageimg/whiterightarrow.svg"} />
        <Aboutworksection />
        <Homemarquee bg={"black"} text={"--textprimary"} />
        <Howwework />
        <Contactsection />
      </div>
    </>
  );
}

export default about;
