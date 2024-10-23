import Projectintro from '@/app/components/projectintro';
import React from 'react';

function AutomationHero(props) {
    return (
        <>
            <div className="automation-hero-section">
                {/* <Projectintro/> */}
                <div>
                    <h1 className=' px-[1.5rem] text-[white] automation-hero-heading hero-heading text-[7.6vw] leading-[6.5rem] text-[--textprimary] font-average'>{props.heading} </h1>
                    <div className="project-intro-wrapper flex mt-[1rem] sm:mt-[2rem] px-[1.5rem]">
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
                <div className='flex gap-[15px] px-[1.5rem] mb-[1rem] automation-all-work-box'>
                    <img className='rotate-[180deg]' src="/images/sectionarrow.svg" alt="" />
                    <p className='automation-all-work  font-inter font-[400] text-[18px] text-[--textprimary] text-start'>All Works</p>
                </div>
                <div className={`flex justify-center ${props.hidden} `}>
                    <div className={` automation-hero-image  mb-[1rem] rounded-[2.5rem] mx-[1.5rem] w-[100%]`} style={{ height:`${props.imgheight}`, backgroundImage: `${props.heroimg}`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div>
                </div>
                <div className={` ${props.videohidden} flex justify-center `}>
                    <video
                    className=' automation-hero-video  mb-[1rem] rounded-[2.5rem] mx-[1.5rem] w-[100%]'
                     src={props.video}
                     autoPlay 
                loop 
                muted
                    ></video>
                </div>
            </div>
        </>
    );
}

export default AutomationHero;
