
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/images/logo.png';
import ButtonAccount from './ButtonAccount';

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container flex items-center justify-between px-8 duration-100 ease-in-out pt-8 pb-8 mx-auto" aria-label="Global">
      <div className="flex lg:flex-1">
        <Link href="/" passHref legacyBehavior>
          <a className="flex items-center gap-2 shrink-0" title="TradeLikeBot homepage">
            <div className="flex items-center">
              <Image
                alt="TradeLikeBot logo"
                src={logo}
                fetchPriority="high"
                width={112}  // Increase the logo size
                height={112}  // Increase the logo size
                decoding="async"
                className="mr-2 w-[112px] sm:w-[112px]" // Update the width
                style={{ color: 'transparent' }}
              />
              <span className="font-semibold text-white text-[16px] sm:text-[20px]">TradeLikeBot</span> {/* Smaller text */}
            </div>
          </a>
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5" onClick={toggleMenu}>
          <span className="sr-only">Open main menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-base-content">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div className={`justify-center gap-12 items-center font-semibold text-base ${isOpen ? 'flex' : 'hidden'} lg:flex`}> {/* Increase font size */}
        <Link href="/#features" passHref legacyBehavior>
          <a className="link no-underline hover:text-slate-100" title="Features">Features</a>
        </Link>
        <Link href="/pricing" passHref legacyBehavior>
          <a className="link no-underline hover:text-slate-100" title="Pricing">Pricing</a>
        </Link>
        <Link href="https://konstantinmb.medium.com/" passHref legacyBehavior>
          <a className="link no-underline hover:text-slate-100" title="Blogs">Blogs</a>
        </Link>
      </div>
      <div className="hidden lg:flex lg:justify-end lg:flex-1">
      <ButtonAccount />
      </div>
    </nav>
  );
};

export default Navbar;
