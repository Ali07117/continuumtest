import Projectintro from '@/app/components/projectintro';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

function AutomationHero(props) {


    const videoRef = useRef(null);
    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.removeAttribute('controls');
        videoRef.current.controls = false;
      }
    }, []);

    return (
        <>
            <div className="automation-hero-section">
                {/* <Projectintro/> */}
                <div>
                    <h1 className=' px-[1.5rem] text-[white] automation-hero-heading hero-heading text-[7.6vw] leading-[6.5rem] text-[--textprimary] font-average'>{props.heading} </h1>
                    <div className="project-intro-wrapper automation-under-heading flex mt-[1rem] sm:mt-[2rem] px-[1.5rem]">
                        <div className="intro-left w-[50%] h-[100%]">
                            <p className=' project-intro-text font-inter font-[300] text-[18px] text-[--textprimary]'>{props.intro}</p>
                            <p className=' project-intro-text font-inter font-[400] text-[18px] text-[--textprimary]'>{props.introheading}</p>
                        </div>
                        <div className="intro-right w-[50%] h-[100%] flex justify-center text-start">
                            <div>
                                <p className=' project-intro-text font-inter font-[300] text-[18px] text-[--textprimary] text-start'>{props.projectintrolabel}</p>
                                <p className=' project-intro-text font-inter font-[400] text-[18px] text-[--textprimary] text-start'>{props.projectintro1}</p>
                                <p className=' project-intro-text font-inter font-[400] text-[18px] text-[--textprimary] text-start'>{props.projectintro2}</p>
                                <p className=' project-intro-text font-inter font-[400] text-[18px] text-[--textprimary] text-start'>{props.projectintro3}</p>
                                <p className=' project-intro-text font-inter font-[400] text-[18px] text-[--textprimary] text-start'>{props.projectintro4}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-[15px] px-[1.5rem] mb-[1rem] automation-all-work-box hover:translate-x-[20px] duration-300 w-fit'>
                    <img className='rotate-[180deg]' src="/images/sectionarrow.svg" alt="" />
                    <Link href="/work">
                    <p className='automation-all-work  font-inter font-[400] text-[18px] text-[--textprimary] text-start'>All Works</p>
                    </Link>
                </div>
                <div className={`flex justify-center ${props.hidden} `}>
                    <div className={` automation-hero-image  mb-[1rem] rounded-[2.5rem] mx-[1.5rem] w-[100%]`} style={{ height: `${props.imgheight}`, backgroundImage: `${props.heroimg}`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div>
                </div>
                <div className={` ${props.videohidden} flex justify-center `}>
                    <video
                        className='automation-hero-video mb-[1rem] rounded-[2.5rem] mx-[1.5rem] h-[100vh] object-cover w-[100%]'
                        src={props.video}
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
            </div>
        </>
    );
}

export default AutomationHero;
