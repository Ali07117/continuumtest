import React from 'react';
import WorkSolutionSection from './worksolutionsection';
import WorkChallenge from './workchallenge';

function WorkInfo() {
  return (
    <>
    <div className="workinfo-wrapper py-[6rem] bg-[--bgsecondry]">
    <WorkChallenge workchallengemainpara={"Automation Anywhere’s initial mobile app lacked UX design input, resulting in a desktop-like interface that was not optimized for mobile use. Our team undertook a complete redesign to create a more streamlined and user-friendly experience, ensuring that the app better catered to mobile-specific needs like bot management and status updates."} workchallengeheading={"Challenge "} workchallengepara={"The app faced several critical issues, including confusing navigation, a complex login process that required users to connect to their Control Room, and a cluttered interface. It was also burdened by unnecessary links to marketing content, which distracted from its core functionality."}/>
    <div className=' gap-[15px] progress-image-container mt-[6rem] px-[1.5rem]'>
    <img className='w-[100%] automation-animation-4' src="/images/workimages/workprocess.svg" alt="" />
    <p className='font-inter automation-animation-5 workprocess-img-text font-[400] text-[18px] mt-[0.5rem] text-[--textsecondry]'>Process to redesign the app</p>
    </div>
    <div className='w-[100%] solution-outer-container flex justify-end pr-[10%] mt-[12rem]'>
    <div className='w-[50%] solution-container'>
        <p className='text-[2rem] font-[300] font-average automation-animation-6'>Solution</p>
        <p className='text-[20px] font-inter solution-container-text mt-[1rem] automation-animation-7 text-[--textsecondry]'>We prioritized key mobile use cases, such as managing bots and receiving automation updates on the go. Through heuristic analysis and task evaluation, we redefined the navigation structure, simplified the login flow, and focused on improving the app's visual design. This included aligning the experience with the desktop version while optimizing it for mobile. User feedback was incorporated through A/B testing to refine the design.</p>
    </div>
    </div>
    </div>
    </>
  );
}

export default WorkInfo;
