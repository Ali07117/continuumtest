import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

function Homesection1(props) {

  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.removeAttribute('controls');
      videoRef.current.controls = false;
    }
  }, []);

  return (
    <>
      <div className={`home-section-1-wrapper bg-transparent  z-[1] px-[1.5rem] pt-[${props.pt}] text-[white]`} style={{ paddingBottom: `${props.pb}` }}>
        <p className={` ${props.ani1} font-average select-work-text leading-[4rem] text-[4rem] text-[--textprimary] font-[400]`} style={{ paddingTop: `${props.titlept}` }}>{props.maintitle}</p>
        <p className={` ${props.ani1} font-average section-heading pt-[1rem] text-[2.8rem] text-[--text-primary] font-[400]`}>{props.title}</p>
        <div className={` ${props.containerclass} mt-[2.1rem] z-[1] flex justify-center `}>
          <video
            ref={videoRef}
            className={` ${props.imgclass} rounded-[2.5rem] object-cover scale-[0.5] section-images h-[100vh] w-[100%]`}
            src={props.img}
            autoPlay
            loop
            muted
            playsInline    // Ensures inline playback on iOS
            webkit-playsinline // iOS-specific attribute for inline playback
            controls={false}    // Hides video controls
            controlsList="nodownload"  // Helps block certain controls like download
            style={{ pointerEvents: 'none' }} // Disable interaction with video
          ></video>
        </div>
        <div className="section-bottom flex pb-[1rem] min-h-[100px] justify-between items-start mt-[20px]">
          <div className="  section-bottom-left flex items-center gap-[8px] hover:translate-x-[20px] duration-300 cursor-pointer">
            <Link href={props.link || '#'}>
              <p className={`text-[1.125rem] ${props.ani2} font-[400] text-[--textprimary]`}>{props.cta || 'Default Text'}</p>
            </Link>
            <img className={` ${props.ani2}`} src="/images/sectionarrow.svg" alt="Arrow Icon" />
          </div>
          <div className="section-bottom-right flex gap-[50px]">
            <div className={` ${props.ani3} bottom-right-first `}>
              <p className='text-[1.125rem] font-[400] text-[--textprimary] bottom-right-first-p w-[15rem]'>{props.para1}</p>
            </div>
            <div className={` ${props.ani4} bottom-right-second`}>
              <p className='text-[1.125rem] font-[400] text-[--textprimary] bottom-right-second-p w-[15rem]'>{props.para2}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homesection1;
