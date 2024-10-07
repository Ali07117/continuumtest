import React from 'react';
import Contactsection from '../components/homesections/contactsection';
import Navbar from '../components/navbar';

function Contactpage() {
  return (
    <>
    <div className="contact-page-wrapper bg-[black] px-[1.5rem]">
    <Navbar/>
    <Contactsection/>
    </div>

    </>
  );
}

export default Contactpage;
