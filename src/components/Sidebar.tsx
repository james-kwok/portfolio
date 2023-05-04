import React from 'react';
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
        nav
          ? `md:hidden fixed left-0 top-0 w-full h-screen bg-[#161616]/50 ease-in duration-300`
          : ''
      }
    >
      <div
        className={
          nav
            ? `fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ffffff] p-10 ease-in duration-500`
            : `fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500`
        }
      >
        <div>
          <div className="flex w-full items-center justify-end">
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[100%] md:w-[90%] text-[#161616] mt-6">
              Kin Kwan (James) Kwok
            </p>
            <p className="w-[100%] md:w-[90%] pb-4 mt-2 text-sm">
              Developer & Designer 👨‍💻
            </p>
          </div>
        </div>
        <div className="py-4 flex flex-col">
          <ul>
            <Link href="/">
              <li className="py-4 text-sm hover:underline decoration-2">
                Home
              </li>
            </Link>
            <Link href="#about">
              <li className="py-4 text-sm hover:underline decoration-2">
                About
              </li>
            </Link>
            <Link href="#projects">
              <li className="py-4 text-sm hover:underline decoration-2">
                Projects
              </li>
            </Link>
            <Link
              href="/assets/kk-james-resume-2023.pdf"
              download="kinkwan-james-resume-2023"
              rel="noopener noreferrer"
              target="_blank"
            >
              <li className="py-4 text-sm hover:underline decoration-2">
                Resumé
              </li>
            </Link>
          </ul>
          <div className="pt-4 w-[80%]">
            <div className="flex items-center justify-between my-4 w-[35%] sm:w-[80%]">
              <div className="p-1 cursor-pointer hover:scale-110 ease-in duration-200">
                <Link
                  href="https://www.linkedin.com/in/itsjameskwok/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
              <div className="p-1 cursor-pointer hover:scale-110 ease-in duration-200">
                <Link
                  href="https://github.com/james-kwok"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub />
                </Link>
              </div>
              <div className="p-1 cursor-pointer hover:scale-110 ease-in duration-200">
                <Link
                  href="/"
                  onClick={() =>
                    (window.location.href = 'mailto:kinkwan.j@gmail.com')
                  }
                >
                  <AiOutlineMail />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
