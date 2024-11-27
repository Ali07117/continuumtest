import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

function WorkChallenge(props) {
  // =============
  useGSAP(
    () => {
      gsap.from(".workinfo-text", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".workinfo-text", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".workinfo-text-2", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".workinfo-text-2", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });

      gsap.from(".workinfo-text-3", {
        y: "30px", // Start the element 100px down from its original position
        opacity:0,
        duration: 0.4, // Set a reasonable duration for the animation (not 20s)
        scrollTrigger: {
          trigger: ".workinfo-text-3", // Element that triggers the animation
          start: "top 80%", // Start the animation when the element's top hits the bottom of the viewport
          end: "end 80%",
        }
      });
      });
      // =============
  return (
    <>
        <p className='font-average workinfo-text px-[20%] text-[2.9vw] font-[400]'>{props.workchallengemainpara}</p>
    <div className="challenge-container pl-[10%] w-[40%] mt-[12rem]">
        <p className='text-[2rem] font-[300] workinfo-text-2 font-average'>{props.workchallengeheading}</p>
        <p className='text-[20px] workinfo-text-3 challenge-container-para font-inter mt-[1rem] text-[--textsecondry]'>{props.workchallengepara}</p>
    </div>
    </>
  );
}

export default WorkChallenge;
