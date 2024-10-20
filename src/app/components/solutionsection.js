import React from 'react';

function SolutionSection(props) {
  return (
    <>
    <div className="solution-section-wrapper flex mt-[6rem] px-[10%]">
    <div className="solution-section-left w-[50%]" style={{paddingRight:`${props.pr}`}}><img className='w-[100%]' src={props.img} alt="" /></div>
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
