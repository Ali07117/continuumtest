import React from 'react';

function Capabilities() {
  return (
    <>
    <div className="capabilities-wrapper px-[1.5rem] bg-[#D5D9E4] min-h-[10rem] mt-[6rem] py-[6rem]">
    <p className='font-average capabilities-text text-[4rem] text-[--text-primary] font-[400]'>Capabilities</p>
    <div className="cards-wrapper grid grid-cols-1 lg:grid-cols-2 py-[3rem]">
    {/* ----------------------- 1 ------------------------ */}
    <div className="capabilities-cards-container py-[3rem]">
    <div className="card-header flex items-center gap-[0rem]">
        <img src="/images/strategy.svg" alt="" />
        <p className='font-average  text-[2.8rem] text-[--textsecondry] font-[400]'>Strategy and Innovation</p>
    </div>
        <p className='font-inter card-para text-[20px] w-[65%] mt-[1rem] text-[--text-primary] font-[400]'>Alignment of business goals with user needs through the development of UX strategies, product innovation, and digital transformation guidance, ensuring long-term success.</p>
    </div>
    {/* ----------------------- 2 ------------------------ */}
    <div className="capabilities-cards-container py-[3rem]">
    <div className="card-header flex items-center gap-[0rem]">
        <img src="/images/experience.svg" alt="" />
        <p className='font-average  text-[2.8rem] text-[--textsecondry] font-[400]'>Experience Design</p>
    </div>
        <p className='font-inter card-para text-[20px] w-[65%] mt-[1rem] text-[--text-primary] font-[400]'>Intuitive and engaging user experiences crafted through UX/UI design, interaction design, and prototyping, resulting in seamless journeys that drive conversions.</p>
    </div>
    {/* ----------------------- 3 ------------------------ */}
    <div className="capabilities-cards-container py-[3rem]">
    <div className="card-header flex items-center gap-[0rem]">
        <img src="/images/userresearch.svg" alt="" />
        <p className='font-average  text-[2.8rem] text-[--textsecondry] font-[400]'>User Research & Insights</p>
    </div>
        <p className='font-inter card-para text-[20px] w-[65%] mt-[1rem] text-[--text-primary] font-[400]'>In-depth analysis of user behaviors and needs through interviews, surveys, and testing provides a clear understanding of the landscape and competitive insights, ensuring products resonate with target audiences.</p>
    </div>
    {/* ----------------------- 4 ------------------------ */}
    <div className="capabilities-cards-container py-[3rem]">
    <div className="card-header flex items-center gap-[0rem]">
        <img src="/images/continuous.svg" alt="" />
        <p className='font-average  text-[2.8rem] text-[--textsecondry] font-[400]'>Continuous Improvement</p>
    </div>
        <p className='font-inter card-para text-[20px] w-[65%] mt-[1rem] text-[--text-primary] font-[400]'>Ongoing refinement of products via UX audits, A/B testing, and optimization, ensuring evolution based on user feedback and emerging needs.</p>
    </div>
    </div>
    <div className="section-bottom-left flex mt-[1rem] items-center gap-[8px]">
            <p className='text-[1.125rem] font-[400] text-[--textsecondry]'>See all Services</p>
            <img src="/images/blackarrow.svg" alt="" />
        </div>
    </div>

        
    </>
  );
}

export default Capabilities;
