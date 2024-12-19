import React from 'react';

function Workimg(props) {
  return (
    <>
        <div className='absolute workimg bg-[white] workimgs work-opacity-img bg-[] max-h-[80vh] rounded-[2.5rem] overflow-hidden opacity-0 workimg1' style={{padding:`${props.padding}`}}>       
            <img className={` workimgs-image w-[100%] h-[100%] object-${props.object} h-[600px] w-[100%]  rounded-[2.5rem]`} src={props.img} alt="" />
            {/* <img className=' workimgs-image h-[68vh] w-[2000px] object-cover rounded-[2.5rem]' src={props.img} alt="" /> */}
        </div>
    </>
  );
}

export default Workimg;
