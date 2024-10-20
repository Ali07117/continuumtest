import React from 'react';

function OutcomeSection(props) {
  return (
    <>
        <div className="work-outcome-container pl-[10%] w-[50%] mt-[12rem]">
          <p className='text-[2rem] font-[300] font-average'>{props.heading}</p>
          <p className='text-[20px] work-outcome-text font-inter mt-[1rem] text-[--textsecondry]'>{props.subheading}</p>
        </div>
    </>
  );
}

export default OutcomeSection;
