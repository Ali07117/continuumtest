import React from 'react';
import Navbar from '../components/navbar';
import AutomationHero from '../automation/component/automationhero';
import WorkChallenge from '../components/workchallenge';
import SolutionSection from '../components/solutionsection';

function EnergyProvider() {
  return (
    <>
        <div className="afious-wrapper">
        <div className="automation-header pt-[14.3rem]  h-[145vh] w-[100%] bg-[--bgprimary]">
            <Navbar/>
            <AutomationHero imgheight={"1200px"} heroimg={"url(/images/workimages/energyproviderheroimage.svg)"} heading={"Energy Provider"} intro={"Intro"} introheading={"Mobile app for a leading robotic process automation(RPA) software company."} projectintrolabel={"Contributions"} projectintro1={"Discovery & Research"} projectintro2={"Strategy"} projectintro3={"Experience Design"} projectintro4={"Visual Design"} />
            <div className="workinfo-wrapper py-[6rem] bg-[--bgsecondry]">
               <WorkChallenge workchallengemainpara={"A leading retail electricity provider in the U.S., wanted a website that communicated its commitment to transparency, reliability, and community engagement. I led the visual design effort, ensuring the website effectively catered to both residential and business customers across multiple states, while highlighting client’s partnerships and community initiatives."} workchallengeheading={"Challenge "} workchallengepara={"We faced several challenges, including managing complex information architecture for different states and customer types, integrating the Chicago Cubs partnership while maintaining Dynegy’s professional brand, and effectively showcasing community engagement and their Total Satisfaction Guarantee."}/>
            </div>
            <SolutionSection  pl={"5%"} flex={"flex"} center={"center"} img={"/images/workimages/energyprovidersolutionimg.svg"} heading={"Solution"} subheading={"We employed a user-centered design approach, conducting research to understand customer needs. This led to a responsive, streamlined navigation system for easy plan comparisons, a high-conversion sign-up process, and engaging visuals that balanced professional branding with community involvement. We ensured the site was accessible and intuitive for all users."}/>
            </div>
        </div>
    </>
  );
}

export default EnergyProvider;
