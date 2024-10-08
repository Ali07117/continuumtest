import React from 'react';

function Worktext(props) {
  return (
    <>
      <div className="wrapper work-left-text-card-wrapper h-[100vh] pt-[5vh]">
        <p className='text-[2rem] font-average text-[--textprimary]'>{props.heading}</p>
        <p className='text-[1.1rem] font-inter text-[--textprimary] pr-[5%] pt-[1rem]'>{props.paral} <br />{props.parar}</p>
        <p className='text-[1.1rem] font-inter text-[--textprimary] leading-[1.8rem] pt-[1.5rem]'>{props.point1}</p>
        <p className='text-[1.1rem] font-inter text-[--textprimary] leading-[1.8rem]'> {props.point2}</p>
        <p className='text-[1.1rem] font-inter text-[--textprimary] leading-[1.8rem]'> {props.point3}</p>
        <p className='text-[1.1rem] font-inter text-[--textprimary] leading-[1.8rem]'> {props.point4}</p>
        <button className='px-[1.5rem] py-[0.5rem] work-left-text-card-wrapper-button border-[2px] border-[#B0B0B0] rounded-[1.5rem] font-inter text-[1rem] font-[600] text-[--textprimary] mt-[10rem]'>View Case Study</button>
      </div>
    </>
  );
}

export default Worktext;
