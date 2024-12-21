'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';
import Contactsection from '../components/homesections/contactsection';
import Navbar from '../components/navbar';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Contactpage() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);

  useGSAP(() => {
    gsap.to(".loading-layer", {
      transform: "translateY(-200%)",
      duration: 1,
      delay: 1,
      ease: "power2.inOut",
    });

    gsap.to(".logo-icon-animated", {
      rotation: 360,
      duration: 1,
      ease: "slow(1,1,false)",
    });
  });

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Continuum Design Labs",
    "url": "https://www.continuumdesignlabs.com",
    "logo": "https://www.continuumdesignlabs.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-347-903-6060",
      "contactType": "Sales",
      "areaServed": "US",
      "availableLanguage": "English",
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "157 Columbus Ave",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10023",
      "addressCountry": "US",
    },
  };

  return (
    <>
      <Head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="Contact Us | Continuum Design Labs" />
        <meta
          property="og:description"
          content="Get in touch with Continuum Design Labs for innovative UX and digital design solutions. We are here to help transform your ideas into reality."
        />
        <meta
          property="og:image"
          content="https://www.continuumdesignlabs.com/contact-og-image.jpg"
        />
        <meta property="og:url" content="https://www.continuumdesignlabs.com/contact" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Continuum Design Labs" />
        <meta
          name="twitter:description"
          content="Get in touch with Continuum Design Labs for innovative UX and digital design solutions."
        />
        <meta
          name="twitter:image"
          content="https://www.continuumdesignlabs.com/twitter-contact-image.jpg"
        />
      </Head>

      <div className="h-[100vh] loading-layer w-[100%] bg-[black] fixed top-[0px] left-[0px] z-[9999] flex items-center justify-center">
        <img className="h-[80px] logo-icon-animated" src="/images/logoicon.svg" alt="" />
      </div>
      <div className="contact-page-wrapper bg-[black] pt-[7.3rem] md:pt-[0rem] ">
        <div className="contact-page-nav-container pt-[6rem] md:pt-[3.5rem] lg:pt-[0rem] px-[1.5rem]">
          <Navbar />
        </div>
        <Contactsection />
      </div>
    </>
  );
}

export default Contactpage;
