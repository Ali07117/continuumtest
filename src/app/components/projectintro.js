import React from 'react';

function Projectintro() {
  return (
    <>
    <div className="project-intro-wrapper flex mt-[1rem] sm:mt-[2rem] px-[1.5rem]">
        <div className="intro-left w-[50%] h-[100%]">
            <p className=' project-intro-text font-inter font-[300] text-[18px] text-[--textprimary]'>Intro</p>
            <p className=' project-intro-text font-inter font-[400] text-[18px] text-[--textprimary]'>Mobile app for a leading robotic process automation(RPA) software company.</p>
        </div>
        <div className="intro-right w-[50%] h-[100%] flex justify-center text-start">
        <div>
            <p className=' project-intro-text font-inter font-[300] text-[18px] text-[--textprimary] text-start'>Contributions</p>
            <p className=' project-intro-text font-inter font-[400] text-[18px] text-[--textprimary] text-start'>Discovery & Research</p>
            <p className=' project-intro-text font-inter font-[400] text-[18px] text-[--textprimary] text-start'>Strategy</p>
            <p className=' project-intro-text font-inter font-[400] text-[18px] text-[--textprimary] text-start'>Experience Design</p>
            <p className=' project-intro-text font-inter font-[400] text-[18px] text-[--textprimary] text-start'>Visual Design</p>
        </div>
        </div>
    </div>
    </>
  );
}

export default Projectintro;
