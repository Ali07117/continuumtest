import React from 'react';
import Contactsection from '../components/homesections/contactsection';
import Navbar from '../components/navbar';

function Contactpage() {
  return (
    <>
      <div className="contact-page-wrapper bg-[black] pt-[8rem] sm:pt-[0rem] ">
        <div className="contact-page-nav-container pt-[6rem] px-[1.5rem]">
          <Navbar/>
        </div>
        <Contactsection />
      </div>
    </>
  );
}

export default Contactpage;
