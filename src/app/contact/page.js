import React from 'react';
import Contactsection from '../components/homesections/contactsection';
import Navbar from '../components/navbar';

function Contactpage() {
  return (
    <>
      <div className="contact-page-wrapper bg-[black] pt-[7.3rem] md:pt-[7.3rem] ">
        <div className="contact-page-nav-container pt-[6rem] md:pt-[3.5rem] lg:pt-[0rem] px-[1.5rem]">
          <Navbar/>
        </div>
        <Contactsection />
      </div>
    </>
  );
}

export default Contactpage;
