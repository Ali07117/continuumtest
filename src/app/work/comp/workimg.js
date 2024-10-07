import React from 'react';

function Workimg(props) {
  return (
    <>
        <div className='absolute workimg workimgs opacity-0 workimg1'>       
            <img className=' workimgs-image h-[90vh] w-[100%] object-cover  rounded-[2.5rem]' src={props.img} alt="" />
        </div>
    </>
  );
}

export default Workimg;
