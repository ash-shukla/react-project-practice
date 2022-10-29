import React from "react";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-teal-600 h-16 w-full flex justify-between lg:px-5 px-3 items-center">
      <p className="lg:text-xl font-medium lg:font-normal">
        Created with{" "}
        <span className="text-blue-900 font-semibold">
          <a
            href="https://tailwindcss.com/docs/installation"
            target={"_blank"}
            rel="noreferrer"
          >
            tailwindcss
          </a>
        </span>{" "}
        by Ashish
      </p>
      <div className="flex lg:space-x-6 space-x-3 lg:px-16 lg:text-3xl text-2xl text-black">
        <AiFillTwitterCircle className="cursor-pointer hover:scale-110" />
        <AiFillLinkedin className="cursor-pointer hover:scale-110" />
        <AiFillYoutube className="cursor-pointer hover:scale-110" />
      </div>
    </div>
  );
};

export default Footer;
