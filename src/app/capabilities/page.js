"use client"

import React from 'react';
import Navbar from '../components/navbar';
import Capabilitiescard from './comp/capabilitiescard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
import Footernav from '../components/homesections/footernav';
gsap.registerPlugin(ScrollTrigger)
function Capabilities() {
  useGSAP(() => {

    // let cmm = gsap.matchMedia();
    // cmm.add("(min-width: 1000px)", () => {


    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".capabilities-anime-container",
        scrub: true,
        pin: true,
        // markers:true,
        start: "top 10%",
        end: "+=2100vh",
      }
    });

    tl.from(".anime-headings", {
      color: "#0443E8",
    }, "f")
    tl.to(".capabilities-cardss", {
      scale: 0.5,
      // stagger:0.1
    }, "f")

    // Select all cards
    const cards = document.querySelectorAll(".capabilities-cards");

    // Scroll up the capabilities-cards and then scale them down
    tl.from(cards, {
      y: "200vh",    // Cards come up from 200vh below
      stagger: 0.5,  // Stagger the animation for each card
      scale: 1       // Starting scale
    }, "a");          // Label to group animations

    // Decrease size by scale 0.5 for all cards except the last one
    cards.forEach((card, index) => {
      if (index < cards.length - 1) { // Exclude the last card
        tl.to(card, {
          scale: 0.5,    // Scale down to 0.5
          duration: 0.5,  // Duration for scaling
          ease: "power1.out",
        }, "<+=0.5");    // Make sure the scale animation happens after the scroll-up
      }
    });

    // Anime heading color change
    tl.to(".anime-heading", {
      color: "#0443E8",
      stagger: 0.5,
    }, "a")
      .to(".anime-heading", {
        color: "white", // Change back to white
        stagger: 0.5,
      }, "<+=0.5")
      .to(".anime-headingd", {
        color: "#0443E8",
        delay: -0.3 // Adjust timing as needed
      });
    // });




  });

  return (
    <>
      <div className="px-[1.5rem] pt-[14.3rem] bg-[--bgprimary] capabilities-wrapperd capabilities-margin-top">
        <Navbar />
        <h1 className='hero-heading text-[white] text-[8rem] leading-[6.5rem] text-[--textprimary] font-average'>Capabilities </h1>
        <h2 className=' font-[400] text-[5.5vw] leading-[6.5vw] sm:text-[4.7vw] hero-subheading-para1 sm:leading-[5.7vw] mt-[1rem] sm:mt-[2rem] text-[--textprimary] font-average'>Empowering Your Vision with Comprehensive Design and Strategy Services</h2>
        {/* <h2 className=' font-[400] text-[4.7vw] leading-[5.7vw] text-[--textprimary] font-average'>Design and Strategy Services </h2> */}
        <div className="capabilities-anime-container w-[100%]  flex h-[50vh] md:h-[90vh] -max-h-[90vh] mt-[6rem]">
          <div className="capabilities-left -bg-[blue] w-[50%] h-[100%]">
            <div className="subscription flex flex-col gap-[1rem]  pb-[2rem]">
              <h3 className=' anime-headings font-[400] text-[2.5rem] text-[--textprimary] font-average'>User Research & Insights </h3>
              <h3 className=' anime-heading font-[400] text-[2.5rem] text-[--textprimary] font-average'>Experience Design</h3>
              <h3 className=' anime-heading font-[400] text-[2.5rem] text-[--textprimary] font-average'>Strategy and Innovation</h3>
              <h3 className=' anime-heading font-[400] text-[2.5rem] text-[--textprimary] font-average'>Continuous Improvement </h3>
            </div>
            <hr className="w-[55%]" />
            <div className="base-subscription flex flex-col gap-[1rem] ">
              <p className='text-[#BFBFBF] text-[1.1rem] font-[400] pt-[1.75rem] font-inter'>Subscription based plans</p>
              <h3 className=' anime-heading font-[400] text-[2.5rem] text-[--textprimary] font-average'>Heuristic Evaluations</h3>
              <h3 className=' anime-headingd font-[400] text-[2.5rem] text-[--textprimary] font-average'>Fractional Design Plans</h3>
            </div>
          </div>
          <div className="capabilities-right w-[50%] -bg-[red] h-[100%]">
            <div className="capabilities-card-wrapper scrollnone  capabilities-cardss absolute min-h-[100px] max-h-[100%] bg-[#D5D9E4] rounded-[2.5rem] py-[3rem] px-[2rem]">
              <h3 className=' font-[400] capabilitiescard-heading text-[2.5rem] text-[#00259C] font-average'>User Research & Insights</h3>
              <p className='font-inter capabilitiescard-para1 text-[20px] text-[#000] font-[400] pt-[2rem]'>Our User Research & Insights service provides a comprehensive understanding of your users through data-driven research methods such as interviews, surveys, and usability testing. We analyze user behaviors, needs, and pain points to ensure that your product aligns with real-world demands. These insights drive the design process, resulting in user-centric solutions that resonate with your audience.</p>
              <p className='font-inter capabilitiescard-para2 text-[20px] text-[#000] font-[400] pt-[1rem]'>We also conduct product-market fit assessments, helping you identify the optimal market positioning for your product. By combining user insights with competitive analysis, we ensure your product meets both user and market needs effectively.</p>
            </div>
            <div className='cards-2 '><Capabilitiescard heading={"Experience Design"} para1={"Our Experience Design service is focused on crafting intuitive and engaging digital experiences that resonate with users. We blend UX/UI design, interaction design, and information architecture to create seamless journeys across all touchpoints. By prioritizing the user at every stage, we ensure that the design not only looks great but also functions smoothly, delivering real value to both the user and your business."} para2={"From wireframing to prototyping, our team creates user interfaces that are visually appealing, easy to navigate, and optimized for performance. We also conduct thorough usability testing to refine the experience, ensuring it’s both accessible and enjoyable."} /></div>
            <div className='cards-3 '><Capabilitiescard heading={"Strategy and Innovation "} para1={"Our Experience Design service is focused on crafting intuitive and engaging digital experiences that resonate with users. We blend UX/UI design, interaction design, and information architecture to create seamless journeys across all touchpoints. By prioritizing the user at every stage, we ensure that the design not only looks great but also functions smoothly, delivering real value to both the user and your business."} para2={"From wireframing to prototyping, our team creates user interfaces that are visually appealing, easy to navigate, and optimized for performance. We also conduct thorough usability testing to refine the experience, ensuring it’s both accessible and enjoyable."} /></div>
            <div className='cards-4 '><Capabilitiescard heading={"Continuous Improvement "} para1={"Our Continuous Improvement service ensures your product evolves and adapts even after launch. We regularly assess user feedback, conduct UX audits, and perform A/B testing to identify opportunities for optimization. By tracking key performance indicators and customer insights, we refine your product over time, keeping it relevant and effective."} para2={"This iterative process allows us to enhance user experiences, boost performance, and ensure your product continues to meet both business goals and user needs as market demands change. Continuous improvement ensures long-term success and sustainable growth."} /></div>
            <div className='cards-5 '><Capabilitiescard heading={"Heuristic Evaluations"} para1={"Our Heuristic Evaluations service, available as a subscription through Heuroscope, provides ongoing expert assessments to identify usability issues and improve user experience. Using established heuristic principles, we evaluate your product’s interface to highlight potential problems, streamline navigation, and enhance accessibility. This service is designed for enterprises looking to continuously refine their digital products."} para2={"By subscribing to our heuristic evaluation service, you’ll receive regular, in-depth assessments, actionable recommendations, and insights that ensure your product consistently delivers an optimized user experience."} /></div>
            <div className='cards-6 '><Capabilitiescard heading={"Fractional Design Plans "} para1={"Our Fractional Design Plans offer subscription-based access to top-tier UX design services, providing an efficient and scalable solution for businesses in need of ongoing design support. These plans allow you to engage a dedicated team focused on user experience design, handling tasks such as wireframes, prototyping, user testing, and iterative improvements as your project evolves."} para2={"This flexible subscription model ensures that your design needs are met continuously, without the commitment of full-time hires, giving you the freedom to scale services as your business grows."} /></div>
          </div>
        </div>
        <Footernav />
      </div>
    </>
  );
}
export default Capabilities;
