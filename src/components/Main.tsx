import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Main = () => {
  return (
    <div className="w-full h-screen text-center px-8 pb-28">
      <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
        <div>
          <p className="text-base">Hi, I'm James 👋</p>
          <h1 className="py-4 max-w-[100%] text-2xl m-auto text-transparent bg-clip-text bg-gradient-to-r from-[#e9e9e9] to-[#515151]">
            Front-End Developer & Designer
          </h1>
          <p className="pb-8 text-xs">Based in Toronto, Ontario</p>
          <div className="flex items-center justify-between max-w-[250px] m-auto py-4">
            <div className="rounded-full bg-white p-6 cursor-pointer hover:scale-105 ease-in duration-200">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full bg-white p-6 cursor-pointer hover:scale-105 ease-in duration-200">
              <FaGithub />
            </div>
            <div className="rounded-full bg-white p-6 cursor-pointer hover:scale-105 ease-in duration-200">
              <AiOutlineMail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
