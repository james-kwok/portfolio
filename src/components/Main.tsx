import React from 'react';
import Link from 'next/link';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Main = () => {
  return (
    <div className="w-full h-screen text-center px-8">
      <div className="max-w-[1240px] w-full h-full top-0 mx-auto flex justify-center items-center">
        <div>
          <p className="text-base">Hi, I&apos;m James 👋</p>
          <h1 className="py-4 max-w-[100%] text-2xl m-auto text-transparent bg-clip-text bg-gradient-to-r from-[#e9e9e9] to-[#515151]">
            Front-End Developer & Designer
          </h1>
          <p className="pb-8 text-xs">Based in Toronto, Ontario</p>
          <div className="flex items-center justify-around max-w-[250px] m-auto py-4">
            <div className="rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-200">
              <Link
                href="https://www.linkedin.com/in/itsjameskwok/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-200">
              <Link
                href="https://github.com/james-kwok"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub />
              </Link>
            </div>
            <div className="rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-200">
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
  );
};

export default Main;
