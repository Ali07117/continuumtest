import React from 'react';

function Homeaboutsection() {
  return (
    <>
      <div className="px-[1.5rem] min-h-[20rem] py-[6rem] homeabout-wrapper flex">
        <div className="homeabout-left w-[50%] min-h-[100%]">
          <p className='font-average text-[65px] section-about-heading text-[--text-primary] font-[400]'>About Us</p>
          <p className='font-inter text-[24px] homeabout-left-text w-[65%] mt-[4rem] text-[--text-primary] font-[400]'>At Continuum, we create digital experiences that deliver measurable results. With expertise across industries, we transform ideas into user-friendly products for startups and Fortune 500 companies alike. Our collaborative approach ensures that every design aligns with your goals, driving success and exceeding expectations. Partner with us to achieve something exceptional.</p>
        </div>
        <div className="homeabout-right w-[50%]">
          <img className='h-[100%] w-[100%]' src="/images/homeaboutimg.svg" alt="" />
        </div>
      </div>
    </>
  );
}

export default Homeaboutsection;
