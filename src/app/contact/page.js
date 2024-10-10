import React from 'react';
import Contactsection from '../components/homesections/contactsection';
import Navbar from '../components/navbar';

function Contactpage() {
  return (
    <>
      <div className="contact-page-wrapper bg-[black] ">
        <div className="contact-page-nav-container pt-[4.3rem] px-[1.5rem]">
          <Navbar bg={"#000"}/>
        </div>
        <Contactsection />
      </div>

    </>
  );
}

export default Contactpage;
