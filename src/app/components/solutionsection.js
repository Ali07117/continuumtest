import React from 'react';

function SolutionSection(props) {
  return (
    <>
    <div className="solution-section-wrapper flex min-h-[70%] mt-[6rem] px-[10%]">
    <div className="solution-section-left w-[50%] " style={{paddingRight:`${props.pr}`}}>
    <img className={` ${props.imghidden} w-[100%]`} src={props.img} alt="" />
    <video
    className='rounded-[2.5rem] afious-solution-video h-[100%] object-cover w-[100%]'
    src={props.video}
    autoPlay 
    loop 
    muted
    playsinline
    ></video>
    </div>
    <div className="solution-section-right w-[50%]" style={{display:`${props.flex}`, paddingLeft:`${props.pl}` , alignItems:`${props.center}`}}>
    <div>
    <p className='text-[2rem] font-[300] font-average mt-[4rem]'>{props.heading}</p>
    <p className='text-[20px] challenge-container-para font-inter mt-[1rem] text-[--textsecondry]'>{props.subheading}</p>
    </div>
    </div>
    </div>
    

    </>
  );
}

export default SolutionSection;
