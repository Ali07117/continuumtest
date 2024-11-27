import React from 'react';
import HowWeWorkQuestion from './comp/HowWeWorkQuestion';

function Howwework() {
  return (
    <>
      <div className="howwework-wrapper min-h-[10rem] px-[1.5rem] mt-[1rem] sm:mt-[6rem] bg-[black]">
        <p className={`font-average capabilities-text how-we-work-heading text-[4rem] text-[--textprimary] font-[400]`}>How we work</p>
        <div className='questions-wrapper'>
        <HowWeWorkQuestion border={"1px"} />
        </div>
      </div>
    </>
  );
}

export default Howwework;
