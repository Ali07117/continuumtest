import React from 'react';
import Footernav from './footernav';

function Contactsection() {
  return (
<>
    <div className="contact-wrapper px-[4.5rem] relative min-h-[100vh]  w-[100%]  pt-[6rem]" >
    <div className='h-[100%] w-[100%] absolute top-[0px] left-[0px] z-[1] rotate-[180deg]' style={{backgroundImage:"url(/images/home-hero.svg)", backgroundPosition:" right 20%%", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}></div>
    <div className='flex contact-inner-wrapper gap-[8rem]'>
    <div className="contact-wrapper-left w-[50%] z-[5] pt-[6rem]">
    <p className=" font-average font-[400] contact-heading leading-[7.2rem] text-[6rem]  text-[--textprimary]">Let’s work together</p>
    <p className=" font-average font-[400] contact-sub-heading leading-[3rem] text-[2rem] mt-[1.5rem] text-[--textprimary]">Ready to bring your vision to life? We're excited to hear about your project!</p>
    <p className='font-inter text-[20px]  contact-para mt-[1rem] text-[--textprimary] font-[400]'>Whether you're looking to refine an existing product, or develop a full product ecosystem, we're here to bring your vision to life.</p>
    </div>
    <div className="contact-wrapper-right w-[50%] z-[5] pt-[6rem]">
    <div className="input-box flex flex-col gap-[0.5rem] w-[100%] w-[100%]">
        <label className='text-[--textprimary] font-[300]' htmlFor="">Name</label>
        <input className='border-[1px] border-[#4A4A4A] w-[100%] text-[--textprimary] px-[0.5rem] outline-none h-[4.5rem] bg-transparent rounded-[0.5rem]' type="text" />
    </div>
    <div className="input-box flex flex-col gap-[0.5rem] mt-[3rem] w-[100%]">
        <label className='text-[--textprimary] font-[300]' htmlFor="">Email Address</label>
        <input className='border-[1px] border-[#4A4A4A] w-[100%] text-[--textprimary] px-[0.5rem] h-[4.5rem] outline-none bg-transparent rounded-[0.5rem]' type="email" />
    </div>
    <div className="input-box flex flex-col gap-[0.5rem] mt-[3rem] w-[100%]">
        <label className='text-[--textprimary] font-[300]' htmlFor="">Project details</label>
        <textarea className='border-[1px] rounded-[0.5rem] w-[100%] text-[--textprimary] p-[0.5rem] bg-[transparent] resize-none border-[#4A4A4A] h-[11rem] outline-none' name="message" ></textarea>
    </div>
    <button className='py-[12px] contact-button px-[24px] text-[--textprimary] bg-[#00259C] mt-[3rem] border-[2px] border-[#044AFF] rounded-[32px]'>Send Message</button>
    </div>
    </div>
    <div className="bottom-logo  z-[5] relative flex justify-center mt-[12rem]"><img className='' src="/images/logo.svg" alt="" /></div>
    <Footernav/>
    </div>
</>
  );
}

export default Contactsection;
