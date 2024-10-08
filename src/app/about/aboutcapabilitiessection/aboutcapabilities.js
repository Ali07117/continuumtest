import Capabilitiescard from '@/app/components/capabilitiesComponent/capabilitiescard';
import React from 'react';

function Aboutcapabilities(props) {
  return (
    <>
      <div className={`capabilities-wrapper px-[1.5rem] min-h-[10rem] mt-[6rem] `} style={{ backgroundColor: `${props.bg}` }}>
        <p className={`font-average capabilities-text text-[4rem] text-[--textprimary] font-[400]`}>Capabilities</p>
        <div className="cards-wrapper grid grid-cols-1 lg:grid-cols-2 py-[3rem]">
          <Capabilitiescard text={"--textprimary"} subheading={"Alignment of business goals with user needs through the development of UX strategies, product innovation, and digital transformation guidance, ensuring long-term success."} heading={"Strategy and Innovation"} />
          <Capabilitiescard text={"--textprimary"} subheading={"Intuitive and engaging user experiences crafted through UX/UI design, interaction design, and prototyping, resulting in seamless journeys that drive conversions."} heading={"Experience Design"} />
          <Capabilitiescard text={"--textprimary"} subheading={"In-depth analysis of user behaviors and needs through interviews, surveys, and testing provides a clear understanding of the landscape and competitive insights, ensuring products resonate with target audiences."} heading={"User Research & Insights"} />
          <Capabilitiescard text={"--textprimary"} subheading={"Ongoing refinement of products via UX audits, A/B testing, and optimization, ensuring evolution based on user feedback and emerging needs."} heading={"Continuous Improvement"} />
        </div>
        <div className="section-bottom-left flex mt-[1rem] items-center gap-[8px]">
          <p className='text-[1.125rem] font-[400] text-[--textprimary]'>View all capabilities</p>
          <img src="/images/aboutpageimg/whiterightarrow.svg" alt="" />
        </div>
      </div>
    </>
  );
}

export default Aboutcapabilities;
