import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import profile from '../../public/assets/about.jpg';

const About = () => {
  return (
    <div id="about" className="w-full px-16 md:px-24">
      <div className="max-w-[1240px] w-full flex flex-wrap justify-center">
        <div className="md:w-[50%] m-auto flex justify-center md:order-2">
          <Image
            className="w-[100%] max-w-[250px] h-auto rounded-full mb-8"
            src={profile}
            alt="profile picture"
            width="200"
            height="200"
          />
        </div>
        <div className="md:w-[50%] bg-[#1a1a1a] border-2 p-8 border-[#242424]">
          <p className="text-xs leading-8 mb-6">
            As a creative professional, I&apos;m driven to build products that
            inspire people to make their lives easier through my web
            development, UX/UI design and product marketing expertise.
          </p>
          <p className="text-xs leading-8 mb-6">
            Like many others, I relocated during the pandemic — for me, it was
            to Toronto. My experience living in cities around the world,
            including Beijing, Boston, Hong Kong, and San Francisco, means
            I&apos;m well-versed in working collaboratively with different teams
            and navigating intercultural nuances.
          </p>
          <p className="text-xs leading-8">
            I&apos;m open to work at the moment and seeking full-time
            opportunties as a front-end developer or any design / dev hybrid
            roles. Get in touch
            <Link
              className="text-blue-300"
              href="/"
              onClick={() =>
                (window.location.href = 'mailto:kinkwan.j@gmail.com')
              }
            >
              {' '}
              via email
            </Link>
            , or connect with me on social media!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
