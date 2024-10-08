"use client"

import React from 'react';
import Navbar from '../components/navbar';
import Capabilitiescard from './comp/capabilitiescard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

function Capabilities() {


  // ----------

  
  // ----------

  useGSAP(() => {
      
      // let cmm = gsap.matchMedia();
      // cmm.add("(min-width: 1000px)", () => {
    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:".capabilities-anime-container",
        scrub:true,
        pin:true,
        start:"top 0%",
        end: "+=2100vh",
      }
    })




  tl.from(".capabilities-cards",{
    y:"200vh",
    stagger:0.5,
  },"a")






  tl.to(".anime-heading", {
    color: "#0443E8",
    stagger: 0.5,
}, "a")
.to(".anime-heading", {
  color: "white", // Change back to blue
  stagger: 0.5,
}, "<+=0.5");
tl.to(".anime-headingd", {
  color: "#0443E8",
  delay: -0.3 // start 1 second earlier
});
// });

// ----------disable gsap--------


// cmm.add("(max-width: 1000px)", () => {
  
//   // Condition to disable animation
//   let disableAnimations = true;  // Set this to false to enable animations again
  
//   if (disableAnimations) {
//     return; // Exit without running the animation
//   }
  
//   var tl = gsap.timeline({
//     scrollTrigger:{
//       trigger:".capabilities-anime-container",
//       scrub:true,
//       pin:true,
//       start:"top 0%",
//       end: "+=2100vh",
//     }
//   })

//   tl.from(".capabilities-cards", {
//     y:"200vh",
//     stagger:0.5,
//   },"a");

//   tl.to(".anime-heading", {
//     color: "#0443E8",
//     stagger: 0.5,
//   }, "a")
//   .to(".anime-heading", {
//     color: "white",
//     stagger: 0.5,
//   }, "<+=0.5");

//   tl.to(".anime-headingd", {
//     color: "#0443E8",
//     delay: -0.3,
//   });
// });

// ----------disable gsap--------

});

  return (
    <>
    <div className="px-[1.5rem] bg-[--bgprimary] capabilities-wrapper">
    <Navbar/>
    <h1 className='hero-heading text-[white] text-[6rem] mt-[22%] lg:mt-[40vh] text-[--textprimary] font-average'>Capabilities </h1>
    <h2 className=' font-[400] text-[4.7vw] hero-subheading-para1 leading-[5.7vw] mt-[2rem] text-[--textprimary] font-average'>Empowering Your Vision with Comprehensive </h2>
    <h2 className=' font-[400] text-[4.7vw] leading-[5.7vw] text-[--textprimary] font-average'>Design and Strategy Services </h2>
    <div className="capabilities-anime-container w-[100%] pt-[5vh] flex min-h-[90vh] max-h-[90vh] mt-[6rem]">
      <div className="capabilities-left -bg-[blue] w-[50%] h-[100%] pr-[10%]">
      <div className="subscription flex flex-col gap-[1.5rem] border-b-[1px] border-b-[#FFFFFF] pb-[2rem]">
      <h3 className=' anime-heading font-[400] text-[2.5rem] text-[--textprimary] font-average'>User Research & Insights </h3>
      <h3 className=' anime-heading font-[400] text-[2.5rem] text-[--textprimary] font-average'>Experience Design</h3>
      <h3 className=' anime-heading font-[400] text-[2.5rem] text-[--textprimary] font-average'>Strategy and Innovation</h3>
      <h3 className=' anime-heading font-[400] text-[2.5rem] text-[--textprimary] font-average'>Continuous Improvement </h3>
      </div>
      <div className="base-subscription flex flex-col gap-[1.5rem]">
      <p className='text-[#BFBFBF] text-[1.1rem] font-[400] pt-[1.75rem] font-inter'>Subscription based plans</p>
      <h3 className=' anime-heading font-[400] text-[2.5rem] text-[--textprimary] font-average'>Heuristic Evaluations</h3>
      <h3 className=' anime-headingd font-[400] text-[2.5rem] text-[--textprimary] font-average'>Fractional Design Plans</h3>
      </div>
      </div>
      <div className="capabilities-right w-[50%] h-[100%]">
      <div className='cards-1'><Capabilitiescard heading={"User Research & Insights"} para1={"Our User Research & Insights service provides a comprehensive understanding of your users through data-driven research methods such as interviews, surveys, and usability testing. We analyze user behaviors, needs, and pain points to ensure that your product aligns with real-world demands. These insights drive the design process, resulting in user-centric solutions that resonate with your audience."} para2={"We also conduct product-market fit assessments, helping you identify the optimal market positioning for your product. By combining user insights with competitive analysis, we ensure your product meets both user and market needs effectively."} /></div>
      <div className='cards-2'><Capabilitiescard heading={"Experience Design"} para1={"Our Experience Design service is focused on crafting intuitive and engaging digital experiences that resonate with users. We blend UX/UI design, interaction design, and information architecture to create seamless journeys across all touchpoints. By prioritizing the user at every stage, we ensure that the design not only looks great but also functions smoothly, delivering real value to both the user and your business."} para2={"From wireframing to prototyping, our team creates user interfaces that are visually appealing, easy to navigate, and optimized for performance. We also conduct thorough usability testing to refine the experience, ensuring it’s both accessible and enjoyable."}/></div>
      <div className='cards-3'><Capabilitiescard heading={"Strategy and Innovation "} para1={"Our Experience Design service is focused on crafting intuitive and engaging digital experiences that resonate with users. We blend UX/UI design, interaction design, and information architecture to create seamless journeys across all touchpoints. By prioritizing the user at every stage, we ensure that the design not only looks great but also functions smoothly, delivering real value to both the user and your business."} para2={"From wireframing to prototyping, our team creates user interfaces that are visually appealing, easy to navigate, and optimized for performance. We also conduct thorough usability testing to refine the experience, ensuring it’s both accessible and enjoyable."}/></div>
      <div className='cards-4'><Capabilitiescard heading={"Continuous Improvement "} para1={"Our Continuous Improvement service ensures your product evolves and adapts even after launch. We regularly assess user feedback, conduct UX audits, and perform A/B testing to identify opportunities for optimization. By tracking key performance indicators and customer insights, we refine your product over time, keeping it relevant and effective."} para2={"This iterative process allows us to enhance user experiences, boost performance, and ensure your product continues to meet both business goals and user needs as market demands change. Continuous improvement ensures long-term success and sustainable growth."}/></div>
      <div className='cards-5'><Capabilitiescard heading={"Heuristic Evaluations"} para1={"Our Heuristic Evaluations service, available as a subscription through Heuroscope, provides ongoing expert assessments to identify usability issues and improve user experience. Using established heuristic principles, we evaluate your product’s interface to highlight potential problems, streamline navigation, and enhance accessibility. This service is designed for enterprises looking to continuously refine their digital products."} para2={"By subscribing to our heuristic evaluation service, you’ll receive regular, in-depth assessments, actionable recommendations, and insights that ensure your product consistently delivers an optimized user experience."}/></div>
      <div className='cards-6'><Capabilitiescard heading={"Fractional Design Plans "} para1={"Our Fractional Design Plans offer subscription-based access to top-tier UX design services, providing an efficient and scalable solution for businesses in need of ongoing design support. These plans allow you to engage a dedicated team focused on user experience design, handling tasks such as wireframes, prototyping, user testing, and iterative improvements as your project evolves."} para2={"This flexible subscription model ensures that your design needs are met continuously, without the commitment of full-time hires, giving you the freedom to scale services as your business grows."}/></div>
      </div>
    </div>
      {/* <div className="work-hidden-container">
      <h3 className=' anime-headingf font-[400] text-[2.5rem] text-[--textprimary] font-average'>User Research & Insights </h3>
      <div className='cards-1'><Capabilitiescard heading={"User Research & Insights"} para1={"Our User Research & Insights service provides a comprehensive understanding of your users through data-driven research methods such as interviews, surveys, and usability testing. We analyze user behaviors, needs, and pain points to ensure that your product aligns with real-world demands. These insights drive the design process, resulting in user-centric solutions that resonate with your audience."} para2={"We also conduct product-market fit assessments, helping you identify the optimal market positioning for your product. By combining user insights with competitive analysis, we ensure your product meets both user and market needs effectively."} /></div>
      <h3 className=' anime-headingf font-[400] text-[2.5rem] text-[--textprimary] font-average'>Experience Design</h3>
      <div className='cards-2'><Capabilitiescard heading={"Experience Design"} para1={"Our Experience Design service is focused on crafting intuitive and engaging digital experiences that resonate with users. We blend UX/UI design, interaction design, and information architecture to create seamless journeys across all touchpoints. By prioritizing the user at every stage, we ensure that the design not only looks great but also functions smoothly, delivering real value to both the user and your business."} para2={"From wireframing to prototyping, our team creates user interfaces that are visually appealing, easy to navigate, and optimized for performance. We also conduct thorough usability testing to refine the experience, ensuring it’s both accessible and enjoyable."}/></div>
      <h3 className=' anime-headingf font-[400] text-[2.5rem] text-[--textprimary] font-average'>Strategy and Innovation</h3>
      <div className='cards-3'><Capabilitiescard heading={"Strategy and Innovation "} para1={"Our Experience Design service is focused on crafting intuitive and engaging digital experiences that resonate with users. We blend UX/UI design, interaction design, and information architecture to create seamless journeys across all touchpoints. By prioritizing the user at every stage, we ensure that the design not only looks great but also functions smoothly, delivering real value to both the user and your business."} para2={"From wireframing to prototyping, our team creates user interfaces that are visually appealing, easy to navigate, and optimized for performance. We also conduct thorough usability testing to refine the experience, ensuring it’s both accessible and enjoyable."}/></div>
      <h3 className=' anime-headingf font-[400] text-[2.5rem] text-[--textprimary] font-average'>Continuous Improvement </h3>
      <div className='cards-4'><Capabilitiescard heading={"Continuous Improvement "} para1={"Our Continuous Improvement service ensures your product evolves and adapts even after launch. We regularly assess user feedback, conduct UX audits, and perform A/B testing to identify opportunities for optimization. By tracking key performance indicators and customer insights, we refine your product over time, keeping it relevant and effective."} para2={"This iterative process allows us to enhance user experiences, boost performance, and ensure your product continues to meet both business goals and user needs as market demands change. Continuous improvement ensures long-term success and sustainable growth."}/></div>
      <p className='text-[#BFBFBF] text-[1.1rem] font-[400] pt-[1.75rem] font-inter'>Subscription based plans</p>
      <h3 className=' anime-headingf font-[400] text-[2.5rem] text-[--textprimary] font-average'>Heuristic Evaluations</h3>
      <div className='cards-5'><Capabilitiescard heading={"Heuristic Evaluations"} para1={"Our Heuristic Evaluations service, available as a subscription through Heuroscope, provides ongoing expert assessments to identify usability issues and improve user experience. Using established heuristic principles, we evaluate your product’s interface to highlight potential problems, streamline navigation, and enhance accessibility. This service is designed for enterprises looking to continuously refine their digital products."} para2={"By subscribing to our heuristic evaluation service, you’ll receive regular, in-depth assessments, actionable recommendations, and insights that ensure your product consistently delivers an optimized user experience."}/></div>
      <h3 className=' anime-headingds font-[400] text-[2.5rem] text-[--textprimary] font-average'>Fractional Design Plans</h3>
      <div className='cards-6'><Capabilitiescard heading={"Fractional Design Plans "} para1={"Our Fractional Design Plans offer subscription-based access to top-tier UX design services, providing an efficient and scalable solution for businesses in need of ongoing design support. These plans allow you to engage a dedicated team focused on user experience design, handling tasks such as wireframes, prototyping, user testing, and iterative improvements as your project evolves."} para2={"This flexible subscription model ensures that your design needs are met continuously, without the commitment of full-time hires, giving you the freedom to scale services as your business grows."}/></div>
      </div> */}

    </div>

    </>
  );
}

export default Capabilities;
