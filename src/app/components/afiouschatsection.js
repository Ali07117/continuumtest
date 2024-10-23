import React from 'react';

function AfiousChatSection() {
  return (
    <>
    <div className="afious-chat-wrapper flex min-h-[80vh] gap-[1rem] mt-[6rem] w-[100%] px-[1.5rem]">
        <div className="afious-chat-left h-[100%] w-[50%] rounded-[2.6rem]">
            <img className=' afious-chat-img w-[100%] object-cover rounded-[2.5rem]' src="/images/chatleftimg.svg" alt="" />
        </div>
        <div className="afious-chat-right h-[100%] overflow-hidden w-[50%]">
            <video 
            className='afious-chat-video object-cover rounded-[3rem] scale-[1.04]'
            src="/videos/chat-video.mp4"
            autoPlay 
            loop 
            muted
            playsinline
            ></video>
        </div>
    </div>


    </>
  );
}

export default AfiousChatSection;
