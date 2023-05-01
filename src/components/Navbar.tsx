import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from './Sidebar';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/navLogo.png"
          alt="logo"
          width="25"
          height="25"
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            {!nav ? <AiOutlineMenu size={25} /> : null}
          </div>
          <Sidebar nav={nav} handleNav={handleNav} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
