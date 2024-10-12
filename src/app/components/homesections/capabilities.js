import React from 'react';
import Capabilitiescard from '../capabilitiesComponent/capabilitiescard';

function Capabilities(props) {
  return (
    <>
    <div className={`capabilities-wrapper px-[1.5rem] min-h-[10rem] py-[6rem]`} style={{backgroundColor:`${props.bg}`}}>
    <p className={`font-average capabilities-text text-[4rem] text-[--textsecondry] font-[400]`}>Capabilities</p>
    <div className="cards-wrapper grid grid-cols-1 lg:grid-cols-2 py-[3rem]">
    <Capabilitiescard text={"--textsecondry"} img={"/images/user satisfaction.gif"} subheading={"Alignment of business goals with user needs through the development of UX strategies, product innovation, and digital transformation guidance, ensuring long-term success."} heading={"Strategy and Innovation"}/>
    <Capabilitiescard text={"--textsecondry"} img={"/images/evaluation.gif"} subheading={"Intuitive and engaging user experiences crafted through UX/UI design, interaction design, and prototyping, resulting in seamless journeys that drive conversions."} heading={"Experience Design"}/>
    <Capabilitiescard text={"--textsecondry"} img={"/images/expert recomendation.gif"} subheading={"In-depth analysis of user behaviors and needs through interviews, surveys, and testing provides a clear understanding of the landscape and competitive insights, ensuring products resonate with target audiences."} heading={"User Research & Insights"}/>
    <Capabilitiescard text={"--textsecondry"} img={"/images/accessbility.gif"} subheading={"Ongoing refinement of products via UX audits, A/B testing, and optimization, ensuring evolution based on user feedback and emerging needs."} heading={"Continuous Improvement"}/>
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
