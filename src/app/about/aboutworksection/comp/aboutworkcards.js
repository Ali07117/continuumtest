import React from 'react';

function Aboutworkcards(props) {
  return (
    <>
      <div className={`workcardwrapper flex items-center py-[2rem] justify-between`} style={{ borderBottom: `${props.border} solid white` }}>
        <p className='w-[33%] work-card-first font-average text-[2rem] text-[--textprimary]'>{props.company}</p>
        <p className='w-[33%] work-card-center text-center font-inter text-[1.1rem] text-[--textprimary]'>{props.device}</p>
        <p className='w-[33%] text-nowrap work-card-last justify-end flex font-inter text-[1.1rem] text-[--textprimary]'>{props.beforpara} <br /> {props.afterpara}</p>
      </div>
    </>
  );
}

export default Aboutworkcards;
