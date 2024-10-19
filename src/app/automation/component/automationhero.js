import Projectintro from '@/app/components/projectintro';
import React from 'react';

function AutomationHero() {
    return (
        <>
            <div className="automation-hero-section">
                <h1 className=' px-[1.5rem] text-[white] hero-heading text-[7.6vw] leading-[6.5rem] text-[--textprimary] font-average'>Automation Anywhere </h1>
                <Projectintro />
                <div className='flex gap-[15px] px-[1.5rem] mb-[1rem] automation-all-work-box'>
                    <img className='rotate-[180deg]' src="/images/sectionarrow.svg" alt="" />
                    <p className='automation-all-work  font-inter font-[400] text-[18px] text-[--textprimary] text-start'>All Works</p>
                </div>
                <div className='flex justify-center'>
                    <div className={` automation-hero-image rounded-[1.5rem] h-[95vh] mx-[1.5rem] w-[100%]`} style={{ backgroundImage: `url(/images/section1img.svg)`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div>
                </div>
            </div>
        </>
    );
}

export default AutomationHero;
