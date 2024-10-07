import React from 'react';

function Homemarquee(props) {
  return (
    <>
    <div className="px-[1.5rem] mt-[6rem] marquee-wrapper overflow-x-hidden">
    <p className={`font-average marquee-heading  text-[2.8rem] text-[${props.text}] font-[400]`}>You are in good company</p>
    <div className={`marquee-container mt-[4rem] flex gap-[55%] overflow-hidden`} style={{backgroundColor:`${props.bg}`}}>
    <div className="marquee-inner-container  flex gap-[100px]">
        <img className='mix-blend-luminosity' src="/images/marqueelogo1.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo2.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo3.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo4.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo5.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo1.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo2.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo3.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo4.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo5.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo1.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo2.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo3.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo4.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo5.svg" alt="" />
    </div>
    <div className="marquee-inner-container flex    ml-[100px]">
        <img className='mix-blend-luminosity' src="/images/marqueelogo1.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo2.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo3.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo4.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo5.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo1.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo2.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo3.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo4.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo5.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo1.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo2.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo3.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo4.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo5.svg" alt="" />
    </div>
    <div className="marquee-inner-container flex   ml-[100px]">
        <img className='mix-blend-luminosity' src="/images/marqueelogo1.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo2.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo3.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo4.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo5.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo1.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo2.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo3.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo4.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo5.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo1.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo2.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo3.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo4.svg" alt="" />
        <img className='mix-blend-luminosity' src="/images/marqueelogo5.svg" alt="" />
    </div>
</div>
    </div>
    </>
  );
}

export default Homemarquee;
