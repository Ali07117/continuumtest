import React, { useEffect, useRef } from 'react';

function AfiousChatSection() {


  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.removeAttribute('controls');
      videoRef.current.controls = false;
    }
  }, []);

  return (
    <>
      <div className="afious-chat-wrapper flex min-h-[80vh] gap-[2rem] mt-[6rem] w-[100%] px-[1.5rem]">
        <div className="afious-chat-left afious-animation-6 h-[100%] w-[50%] rounded-[2.6rem]">
          {/* <img className=' afious-chat-img w-[100%] object-cover rounded-[2.5rem]' src="/images/chatleftimg.svg" alt="" /> */}
          <video
            className='afious-chat-video object-cover rounded-[3rem]'
            src="/videos/video9.mp4"
            autoPlay
            loop
            muted
            playsInline    // Ensures inline playback on iOS
            webkit-playsinline // iOS-specific attribute for inline playback
            controls={false}    // Hides video controls
            controlsList="nodownload"  // Helps block certain controls like download
            style={{ pointerEvents: 'none' }} // Disable interaction with video
          ></video>
        </div>
        <div className="afious-chat-right afious-animation-7 h-[100%] overflow-hidden w-[50%]">
          <video
            className='afious-chat-video object-cover rounded-[3rem] scale-[1.04]'
            src="/videos/chat-video.mp4"
            autoPlay
            loop
            muted
            playsInline    // Ensures inline playback on iOS
            webkit-playsinline // iOS-specific attribute for inline playback
            controls={false}    // Hides video controls
            controlsList="nodownload"  // Helps block certain controls like download
            style={{ pointerEvents: 'none' }} // Disable interaction with video
          ></video>
        </div>
      </div>


    </>
  );
}

export default AfiousChatSection;
