import React from 'react';

function WorkResult() {
  return (
    <>
        <div className="work-result-contaier mt-[12rem] flex pr-[1.5rem] gap-[1rem]">
        <div className="work-result-left  w-[40%] pl-[10%]">
        <div className="">
        <p className='text-[2rem] font-[300] font-average'>Results </p>
        <p className='text-[20px] work-result-para font-inter mt-[1rem] text-[--textsecondry]'>The revamped mobile app significantly improved user satisfaction, addressing core usability issues and enhancing mobile-specific functionality. With clearer navigation and optimized performance, the app became a more effective tool for managing bots and automations, allowing users to stay connected and in control even when away from their desktops.</p>
    </div>
        </div>
        <div className="work-result-right w-[60%]">
          <img className=' work-result-image  w-[100%]' src="/images/workimages/workresultimage.svg" alt="" />
        </div>
        </div>
    </>
  );
}

export default WorkResult;
