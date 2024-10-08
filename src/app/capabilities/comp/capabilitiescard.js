import React from 'react';

function Capabilitiescard(props) {
  return (
    <>
      <div className="capabilities-card-wrapper scrollnone overflow-y-auto capabilities-cards absolute min-h-[90%] max-h-[100%] bg-[#D5D9E4] rounded-[2.5rem] py-[3rem] px-[2rem]">
        <h3 className=' font-[400] capabilitiescard-heading text-[2.5rem] text-[#00259C] font-average'>{props.heading}</h3>
        <p className='font-inter capabilitiescard-para1 text-[20px] text-[#000] font-[400] pt-[2rem]'>{props.para1}</p>
        <p className='font-inter capabilitiescard-para2 text-[20px] text-[#000] font-[400] pt-[1rem]'>{props.para2}</p>
      </div>
    </>
  );
}

export default Capabilitiescard;
