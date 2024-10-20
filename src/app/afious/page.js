import React from 'react';
import Navbar from '../components/navbar';
import Projectintro from '../components/projectintro';
import AutomationHero from '../automation/component/automationhero';
import WorkChallenge from '../components/workchallenge';
import SolutionSection from '../components/solutionsection';

function Afious() {
  return (
    <>
        <div className="afious-wrapper">
        <div className="automation-header pt-[14.3rem]  h-[145vh] w-[100%] bg-[--bgprimary]">
            <Navbar/>
            <AutomationHero imgheight={"100vh"} heroimg={"url(/images/workimages/afiousheroimg.svg)"} heading={"Afious"} intro={"Intro"} introheading={"Startup re-imagining loneliness crisis on campuses by matching people based on similar interests."} projectintrolabel={"Contributions"} projectintro1={"Discovery & Research"} projectintro2={"Strategy"} projectintro3={"Experience Design"} projectintro4={"Visual Design"} />
            <div className="workinfo-wrapper py-[6rem] bg-[--bgsecondry]">
               <WorkChallenge workchallengemainpara={"Afious is a mobile app that connects college students through shared interests, addressing the growing loneliness problem on campuses exacerbated by COVID-19. Our goal was to build an intuitive platform where students could easily find peers, join clubs, and engage in campus life."} workchallengeheading={"Challenge "} workchallengepara={"The main challenge was to create a solution that felt authentic and engaging without overwhelming users. Early versions faced issues with a complex onboarding process and a generic interface that didn’t resonate with Gen Z users. The primary task was to refine the experience to enable quick and meaningful connections based on student interests."}/>
            </div>
            <SolutionSection pr={"12%"} img={"/images/workimages/afioussolutionimg.svg"} heading={"Solution"} subheading={"We began with extensive interviews to validate the concept and understand student needs. Using this data, we reworked the onboarding and interest pages multiple times to ensure a seamless experience. Our efforts included designing a vibrant, modern interface that matched Gen Z aesthetics and integrating a recommendation engine to suggest relevant connections. Key features like group chats, event listings, and curated content were added to encourage interaction."}/>
            </div>
        </div>
    </>
  );
}

export default Afious;
