import React from 'react';

function Capabilitiescard(props) {
  return (
    <>
      <div className="capabilities-cards-container py-[1.5rem] sm:py-[3rem]">
        <div className="card-header flex items-center gap-[0rem]">
          <img className='h-[85px]' src={props.img} alt="" />
          <p className={`font-average  text-[2.8rem] text-[${props.text}] font-[400]`}>{props.heading}</p>
        </div>
        <p className={`font-inter card-para text-[20px] w-[600px] mt-[1rem] text-[${props.text}] font-[400]`}>{props.subheading}</p>
      </div>
    </>
  );
}

export default Capabilitiescard;
