import React from 'react';

function Workimg(props) {
  return (
    <>
        <div className='absolute workimg workimgs work-opacity-img opacity-0 workimg1'>       
            <img className=' workimgs-image h-[75vh] w-[2000px] object-cover rounded-[2.5rem]' src={props.img} alt="" />
            {/* <img className=' workimgs-image h-[68vh] w-[2000px] object-cover rounded-[2.5rem]' src={props.img} alt="" /> */}
        </div>
    </>
  );
}

export default Workimg;
