import React from 'react';
import Capabilitiescard from '../capabilitiesComponent/capabilitiescard';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Correct hook in Next.js 13+

function Capabilities(props) {
  return (
    <>
    <div className={`capabilities-wrapper px-[1.5rem] min-h-[10rem] py-[6rem]`} style={{backgroundColor:`${props.bg}`}}>
    <p className={`font-average capabilities-text capabilities-text-heading text-[4rem] text-[${props.textcol}] font-[400]`}>Capabilities</p>
    <div className="cards-wrapper grid grid-cols-1 lg:grid-cols-2 py-[3rem]">
    <div className='capabilities-text-box-1'>
    <Capabilitiescard text={props.textcol} img={props.capabgif4} subheading={"Alignment of business goals with user needs through the development of UX strategies, product innovation, and digital transformation guidance, ensuring long-term success."} heading={"Strategy and Innovation"}/>
    </div>
    <div className='capabilities-text-box-2'>
    <Capabilitiescard text={props.textcol} img={props.capabgif3} subheading={"Intuitive and engaging user experiences crafted through UX/UI design, interaction design, and prototyping, resulting in seamless journeys that drive conversions."} heading={"Experience Design"}/>
    </div>
    <div className='capabilities-text-box-3'>
    <Capabilitiescard text={props.textcol} img={props.capabgif2} subheading={"In-depth analysis of user behaviors and needs through interviews, surveys, and testing provides a clear understanding of the landscape and competitive insights, ensuring products resonate with target audiences."} heading={"User Research & Insights"}/>
    </div>
    <div className='capabilities-text-box-4'>
    <Capabilitiescard text={props.textcol} img={props.capabgif1} subheading={"Ongoing refinement of products via UX audits, A/B testing, and optimization, ensuring evolution based on user feedback and emerging needs."} heading={"Continuous Improvement"}/>
    </div>
    </div>
    <div className="section-bottom-left flex mt-[1rem] items-center gap-[8px] hover:translate-x-[20px] duration-300 w-fit">
    <Link href="/capabilities"><p className={`text-[1.125rem] font-[400] capabilities-arrow-link text-[${props.textcol}]`}>See all Capabilities</p></Link>
            <img className='capabilities-arrow-link' src={props.arrowimg} alt="" />
        </div>
    </div>

        
    </>
  );
}

export default Capabilities;
