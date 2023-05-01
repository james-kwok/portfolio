import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai';

type Props = {
  nav: boolean;
  handleNav: () => void;
};

const Sidebar: React.FC<Props> = ({ nav, handleNav }) => {
  return (
    <div
      className={
        nav ? `md:hidden fixed left-0 top-0 w-full h-screen bg-black/50` : ''
      }
    >
      <div
        className={
          nav
            ? `fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500`
            : `fixed left-[-100%] top-0 p-10 ease-in duration-500`
        }
      >
        <div>
          <div className="flex w-full items-center justify-between">
            <Image
              src="/../public/assets/navLogo.png"
              alt="logo"
              width="15"
              height="15"
            />
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[100%] md:w-[90%] mt-6">Kin Kwan (James) Kwok</p>
            <p className="w-[100%] md:w-[90%] pb-4 mt-2 text-sm text-gray-500">
              Developer & Designer 👨‍💻
            </p>
          </div>
        </div>
        <div className="py-4 flex flex-col">
          <ul className="uppercase">
            <Link href="/">
              <li className="py-4 text-sm">Home</li>
            </Link>
            <Link href="/">
              <li className="py-4 text-sm">About</li>
            </Link>
            <Link href="/">
              <li className="py-4 text-sm">Projects</li>
            </Link>
          </ul>
          <div className="pt-4 w-[80%]">
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                <FaLinkedinIn />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                <FaGithub />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-200">
                <AiOutlineMail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
