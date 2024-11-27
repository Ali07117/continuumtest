import React from 'react';

function OutcomeSection(props) {
  return (
    <>
        <div className="work-outcome-container pl-[10%] w-[50%] mt-[12rem]">
          <p className='text-[2rem] afious-animation-4 automation-animation-13 energy-animation-4 font-[300] font-average'>{props.heading}</p>
          <p className='text-[20px] afious-animation-5 automation-animation-14 work-outcome-text energy-animation-5 font-inter mt-[1rem] text-[--textsecondry]'>{props.subheading}</p>
        </div>
    </>
  );
}

export default OutcomeSection;
