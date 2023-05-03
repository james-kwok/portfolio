import React, { useState } from 'react';
import Link from 'next/link';
import Sidebar from './Sidebar';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full h-20 z-[100] pt-8">
      <div className="flex justify-end items-center w-full h-full px-16 2xl:px-24">
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="mx-6 text-sm hover:underline decoration-2">
                Home
              </li>
            </Link>
            <Link href="#about">
              <li className="mx-6 text-sm hover:underline decoration-2">
                About
              </li>
            </Link>
            <Link href="#projects">
              <li className="mx-6 text-sm hover:underline decoration-2">
                Work
              </li>
            </Link>
            <Link
              href="/assets/kk-james-resume-2023.pdf"
              download="kinkwan-james-resume-2023"
              rel="noopener noreferrer"
              target="_blank"
            >
              <li className="mx-6 text-sm hover:underline decoration-2">
                Resumé
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            {!nav ? <AiOutlineMenu size={25} /> : null}
          </div>
          <Sidebar nav={nav} handleNav={handleNav} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
