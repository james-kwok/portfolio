import Link from 'next/link';
import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Projects = () => {
  return (
    <div id="projects" className="w-full px-16 md:px-24 md:mt-32">
      {/* Dev */}
      <p className="w-full my-8 md:text-center">Dev Work</p>
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between pb-8">
        <div className="w-[100%] md:w-[31%] bg-[#1a1a1a] border-2 p-8 border-[#242424] mb-8">
          <p className="text-xs leading-8">Zoomie 🐶 - Full Stack Web App</p>
          <Link
            href="https://github.com/james-kwok/zoomie-app"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-300 text-xs leading-8"
          >
            Client & Server
          </Link>
        </div>
        <div className="w-[100%] md:w-[31%] bg-[#1a1a1a] border-2 p-8 border-[#242424] mb-8">
          <p className="text-xs leading-8">BrainFlix 🧠 - Full Stack Web App</p>
          <Link
            href="https://github.com/james-kwok/james-kwok-brainflix"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-300 text-xs leading-8"
          >
            Client
          </Link>
          <br></br>
          <Link
            href="https://github.com/james-kwok/james-kwok-brainflix-api"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-300 text-xs leading-8"
          >
            Server
          </Link>
        </div>
        <div className="w-[100%] md:w-[31%] bg-[#1a1a1a] border-2 p-8 border-[#242424] mb-8">
          <p className="text-xs leading-8">Air Miles 🏆 - 24-hour Hackathon</p>
          <Link
            href="https://github.com/james-kwok/air-miles-industry-project"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-300 text-xs leading-8"
          >
            Presentation Demo
          </Link>
        </div>
      </div>

      {/* Design */}

      <p className="w-full my-8 md:text-center">Design Work</p>
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between pb-8">
        <div className="w-[100%] md:w-[31%] bg-[#1a1a1a] border-2 p-8 border-[#242424] mb-8">
          <p className="text-xs leading-8">Sprout 🌱 - UX/UI</p>
          <Link
            href="https://www.getsprout.co/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-300 text-xs leading-8"
          >
            Marketing Site
          </Link>
        </div>
        <div className="w-[100%] md:w-[31%] bg-[#1a1a1a] border-2 p-8 border-[#242424] mb-8">
          <p className="text-xs leading-8">Braid 🎨 - UI Contributor</p>
          <Link
            href="https://seek-oss.github.io/braid-design-system"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-300 text-xs leading-8"
          >
            Design System
          </Link>
        </div>
        <div className="w-[100%] md:w-[31%] bg-[#1a1a1a] border-2 p-8 border-[#242424] mb-8">
          <p className="text-xs leading-8">JobsDB 💼 - UX/UI</p>
          <Link
            href="https://apps.apple.com/hk/app/jobsdb-job-search/id414607432?l=en"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-300 text-xs leading-8"
          >
            Mobile App
          </Link>
        </div>
      </div>
      <div className="flex justify-center flex-wrap">
        <p className="w-full md:text-center text-xl mt-8 text-transparent bg-clip-text bg-gradient-to-r from-[#e9e9e9] to-[#515151]">
          Want to learn more? Let&apos;s connect.
        </p>
        <div className="flex items-center justify-around max-w-[250px] m-auto py-4">
          <div className="rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <FaLinkedinIn />
          </div>
          <div className="rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <FaGithub />
          </div>
          <div className="rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-200">
            <AiOutlineMail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
