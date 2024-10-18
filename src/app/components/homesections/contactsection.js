import React from 'react';
import Footernav from './footernav';

function Contactsection(props) {
  return (
    <>
      <div className="contact-wrapper px-[4.5rem] relative min-h-[100vh]  w-[100%]  pt-[6rem]" >
        <div className='h-[100%] w-[100%] absolute top-[0px] left-[0px] z-[1] rotate-[180deg]' style={{ backgroundImage: `url(${props.bg})`, backgroundPosition: " right 20%%", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div>
        <div className='flex contact-inner-wrapper gap-[8rem]'>
          <div className="contact-wrapper-left w-[50%]  z-[5] ">
            <p className=" font-average font-[400] contact-headings  text-[8rem] leading-[7.5rem]  text-[--textprimary]">Let’s work together</p>
            <p className=" font-average font-[400] contact-sub-heading leading-[3rem] text-[2rem] mt-[1.5rem] text-[--textprimary]">Ready to bring your vision to life? We're excited to hear about your project!</p>
            <p className='font-inter text-[20px]  contact-para mt-[1rem] text-[--textprimary] font-[400]'>Whether you're looking to refine an existing product, or develop a full product ecosystem, we're here to bring your vision to life.</p>
          </div>
          <div className="contact-wrapper-right w-[50%]  z-[5] ">
            <div className="input-box flex flex-col gap-[0.5rem] w-[100%] w-[100%]">
              <label className='text-[--textprimary] font-[300] text-[16px]' htmlFor="">Name</label>
              <input className='border-[1px] border-[#4A4A4A] w-[100%] text-[--textprimary] px-[0.5rem] outline-none h-[4.5rem] bg-transparent rounded-[0.5rem]' type="text" />
            </div>
            <div className="input-box flex flex-col gap-[0.5rem] mt-[3rem] w-[100%]">
              <label className='text-[--textprimary] font-[300] text-[16px]' htmlFor="">Email Address</label>
              <input className='border-[1px] border-[#4A4A4A] w-[100%] text-[--textprimary] px-[0.5rem] h-[4.5rem] outline-none bg-transparent rounded-[0.5rem]' type="email" />
            </div>
            <div className="input-box flex flex-col gap-[0.5rem] mt-[3rem] w-[100%]">
              <label className='text-[--textprimary] font-[300] text-[16px]' htmlFor="">Project details</label>
              <textarea className='border-[1px] rounded-[0.5rem] w-[100%] text-[--textprimary] p-[0.5rem] bg-[transparent] resize-none border-[#4A4A4A] h-[11rem] outline-none' name="message" ></textarea>
            </div>
            {/* ------------------ */}
            <div className="z-[3]  flex-col h-[50px] contact-button flex items-center flex-col w-[180px] bg-[#00259C] mt-[3rem]  text-[white] relative overflow-hidden rounded-[32px] text-[18px] cursor-pointer">
            <div className='  py-[12px] px-[24px] h-[50px] w-[150%] text-center layer-1 rounded-[32px]  bg-[#00259C]'>Send Message</div>
            <div className='  py-[12px] px-[24px] h-[50px] w-[150%] text-center layer-2 rounded-[32px] text-[#00259C]  bg-[#D5D9E4]'>Send Message</div>
            </div>

            {/* <h3 className=' z-[3] nav-links-1 py-[12px] contact-button px-[24px] w-[180px] flex justify-center bg-[#00259C] mt-[3rem]  text-[white] relative overflow-hidden rounded-[32px] text-[18px] cursor-pointer'>
                <div className=' z-[2] nav-links-layer-1 nav-links-layer  py-[12px] contact-button px-[24px] w-[180px] flex justify-center items-center  absolute  translate-y-[100%]   bg-[#D5D9E4]'>Send Message</div>
                Send Message</h3> */}
            

            {/* ---------------------- */}
            {/* <button className='py-[12px] contact-button px-[24px] text-[--textprimary] bg-[#00259C] mt-[3rem] border-[2px] border-[#044AFF] rounded-[32px]'>Send Message</button> */}
          </div>
        </div>
        {/* <div className="bottom-logo  z-[5] relative flex justify-center mt-[12rem]"><Link href="/"><img className='h-[16px] footer-logo' src="/images/logo.svg" alt="" /></Link></div> */}
        <Footernav />
      </div>
    </>
  );
}

export default Contactsection;
