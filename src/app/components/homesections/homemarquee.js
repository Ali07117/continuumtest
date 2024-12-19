import React from 'react';
import Marquee from "react-fast-marquee";

function Homemarquee(props) {
  return (
    <>
      <div className={`px-[1.5rem] py-[12rem] marquee-wrapper overflow-x-hidden`} style={{ backgroundColor: `${props.bgwrapper}` }}>
        <p className={`font-average marquee-heading marquee-heading-text marquee-heading-text py-[1rem] sm:py-[0rem] text-[2.8rem] text-[${props.text}] font-[400]`}>You are in good company</p>
        <div className={`marquee-container my-[1rem] sm:mt-[3rem] flex gap-[55%] overflow-hidden`} style={{ backgroundColor: `${props.bg}` }}>
          {/* <div className="marquee-inner-containerr flex gap-[100px]"> */}
          <Marquee style={{ marginTop: "0.5rem" }}>
    <img className='ml-[70px] mix-blend-luminosity grayscale h-[55px]' src="/images/marqueelogo2.svg" alt="" />
    <img className='ml-[70px] mix-blend-luminosity grayscale h-[55px]' src="/images/marqueelogo1.svg" alt="" />
    <img className='ml-[70px] mix-blend-luminosity grayscale h-[55px]' src="/images/marqueelogo3.svg" alt="" />
    <img className='ml-[70px] mix-blend-luminosity grayscale h-[55px]' src="/images/marqueelogo4.svg" alt="" />
    <img className='ml-[70px] mix-blend-luminosity grayscale h-[55px]' src="/images/marqueelogo5.svg" alt="" />
    <img className='ml-[70px] mix-blend-luminosity grayscale h-[55px]' src="/images/marqueelogo1.svg" alt="" />
    <img className='ml-[70px] mix-blend-luminosity grayscale h-[55px]' src="/images/marqueelogo2.svg" alt="" />
    <img className='ml-[70px] mix-blend-luminosity grayscale h-[55px]' src="/images/marqueelogo3.svg" alt="" />
    <img className='ml-[70px] mix-blend-luminosity grayscale h-[55px]' src="/images/marqueelogo4.svg" alt="" />
    <img className='ml-[70px] mix-blend-luminosity grayscale h-[55px]' src="/images/marqueelogo5.svg" alt="" />
    <img className='ml-[70px] mix-blend-luminosity grayscale h-[55px]' src="/images/marqueelogo1.svg" alt="" />
    <img className='ml-[70px] mix-blend-luminosity grayscale h-[55px]' src="/images/marqueelogo2.svg" alt="" />
    <img className='ml-[70px] mix-blend-luminosity grayscale h-[55px]' src="/images/marqueelogo3.svg" alt="" />
    <img className='ml-[70px] mix-blend-luminosity grayscale h-[55px]' src="/images/marqueelogo4.svg" alt="" />
    <img className='ml-[70px] mix-blend-luminosity grayscale h-[55px]' src="/images/marqueelogo5.svg" alt="" />
</Marquee>
          {/* </div> */}
          {/* <div className="marquee-inner-containerr flex ml-[100px]">
            <img className='' src="/images/marqueelogo2.svg" alt="" />
            <img className='' src="/images/marqueelogo1.svg" alt="" />
            <img className='' src="/images/marqueelogo3.svg" alt="" />
            <img className='' src="/images/marqueelogo4.svg" alt="" />
            <img className='' src="/images/marqueelogo5.svg" alt="" />
            <img className='' src="/images/marqueelogo1.svg" alt="" />
            <img className='' src="/images/marqueelogo2.svg" alt="" />
            <img className='' src="/images/marqueelogo3.svg" alt="" />
            <img className='' src="/images/marqueelogo4.svg" alt="" />
            <img className='' src="/images/marqueelogo5.svg" alt="" />
            <img className='' src="/images/marqueelogo1.svg" alt="" />
            <img className='' src="/images/marqueelogo2.svg" alt="" />
            <img className='' src="/images/marqueelogo3.svg" alt="" />
            <img className='' src="/images/marqueelogo4.svg" alt="" />
            <img className='' src="/images/marqueelogo5.svg" alt="" />
          </div>
          <div className="marquee-inner-containerr flex ml-[100px]">
            <img className='' src="/images/marqueelogo1.svg" alt="" />
            <img className='' src="/images/marqueelogo2.svg" alt="" />
            <img className='' src="/images/marqueelogo3.svg" alt="" />
            <img className='' src="/images/marqueelogo4.svg" alt="" />
            <img className='' src="/images/marqueelogo5.svg" alt="" />
            <img className='' src="/images/marqueelogo1.svg" alt="" />
            <img className='' src="/images/marqueelogo2.svg" alt="" />
            <img className='' src="/images/marqueelogo3.svg" alt="" />
            <img className='' src="/images/marqueelogo4.svg" alt="" />
            <img className='' src="/images/marqueelogo5.svg" alt="" />
            <img className='' src="/images/marqueelogo1.svg" alt="" />
            <img className='' src="/images/marqueelogo2.svg" alt="" />
            <img className='' src="/images/marqueelogo3.svg" alt="" />
            <img className='' src="/images/marqueelogo4.svg" alt="" />
            <img className='' src="/images/marqueelogo5.svg" alt="" />
          </div> */}
        </div>
      </div>
    </>
  );
}
// mix-blend-luminositys
export default Homemarquee;
