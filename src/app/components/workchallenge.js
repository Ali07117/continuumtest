import React from 'react';

function WorkChallenge(props) {
  return (
    <>
        <p className='font-average workinfo-text px-[20%] text-[2.9vw] font-[400]'>{props.workchallengemainpara}</p>
    <div className="challenge-container pl-[10%] w-[40%] mt-[12rem]">
        <p className='text-[2rem] font-[300] font-average'>{props.workchallengeheading}</p>
        <p className='text-[20px] challenge-container-para font-inter mt-[1rem] text-[--textsecondry]'>{props.workchallengepara}</p>
    </div>
    </>
  );
}

export default WorkChallenge;
