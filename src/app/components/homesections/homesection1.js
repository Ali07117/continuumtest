import React from 'react';

function Homesection1(props) {
  return (
    <>
      <div className={`home-section-1-wrapper bg-[black]  px-[1.5rem]  pt-[${props.pt}] text-[white]`} style={{ paddingBottom: `${props.pb}` }}>
        <p className={`font-average select-work-text leading-[4rem] text-[4rem] text-[--textprimary] font-[400]`} style={{ paddingTop: `${props.titlept}` }}>{props.maintitle}</p>
        <p className='font-average section-heading pt-[1rem] text-[2.8rem] text-[--text-primary] font-[400]'>{props.title}</p>
        <div className={` ${props.containerclass} mt-[2.1rem] flex justify-center`}>
          {/* <div className={` ${props.imgclass} rounded-[2.5rem] scale-[0.5] section-images h-[100vh] w-[100%]`} style={{ backgroundImage: `url(${props.img})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div> */}
          <video
          className={` ${props.imgclass} rounded-[2.5rem] object-cover scale-[0.5] section-images h-[100vh] w-[100%]`}
            src={props.img}
            autoPlay
            loop
            muted
            playsinline
          ></video>
        </div>
        <div className="section-bottom flex pb-[1rem] min-h-[100px] justify-between items-start mt-[20px]">
          <div className="section-bottom-left flex items-center gap-[8px]">
            <p className='text-[1.125rem] font-[400] text-[--textprimary]'>{props.cta}</p>
            <img src="/images/sectionarrow.svg" alt="" />
          </div>
          <div className="section-bottom-right flex gap-[50px]">
            <div className="bottom-right-first">
              <p className='text-[1.125rem] font-[400] text-[--textprimary] bottom-right-first-p w-[15rem]'>{props.para1}</p>
            </div>
            <div className="bottom-right-second">
              <p className='text-[1.125rem] font-[400] text-[--textprimary] bottom-right-second-p w-[15rem]'>{props.para2}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homesection1;
