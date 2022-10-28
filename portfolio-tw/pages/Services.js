import Image from "next/image";
import React from "react";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import design from "../public/design.png";
import Portfolio from "./Portfolio";

const Services = () => {
  return (
    <div className="text-center">
      <h3 className="text-3xl py-1 darkModeText">Services I offer</h3>
      <p className="font-normal text-lg py-2 leading-8 text-gray-800 darkModeText">
        Since the beginning of my journey as a freelancer developer, I have done
        remote work for
        <span className="text-teal-500 "> Agencies </span>
        consulted for <span className="text-teal-500 "> startups </span>
        and collaborated with talented people to create digital products for
        both business and consumer use.
      </p>
      <p className="text-lg py-2 leading-8 text-gray-800 darkModeText">
        I offer wide range of services, including brand design, programming and
        teaching
      </p>
      <div className=" flex flex-col justify-center text-center">
        <div className="text-center shadow-2xl p-10 rounded-xl my-10 darkModeCard h-[30rem]">
          <Image
            className="ml-[5.5rem] lg:ml-[24rem]"
            src={design}
            width={100}
            height={100}
          />
          <h3 className="text-lg font-medium pt-8 pb-2 ">Beautiful Design</h3>
          <p className="">
            Creating elegant design suited for your needs following core design
            thoery
          </p>
          <h4 className="text-teal-600 py-4 font-medium ">
            Web Development Tools I use
          </h4>
          <p className="text-gray-800 py-1 ">React</p>
          <p className="text-gray-800 py-1 ">Angular</p>
          <p className="text-gray-800 py-1 ">CSS</p>
          <p className="text-gray-800 py-1 ">Javascript</p>
        </div>
        <div className="text-center shadow-2xl p-10 rounded-xl my-10 darkModeCard">
          <Image
            className="ml-[5.5rem] lg:ml-[24rem]"
            src={code}
            width={100}
            height={100}
          />
          <h3 className="text-lg font-medium pt-8 pb-2 ">Beautiful Design</h3>
          <p className="">
            Creating elegant design suited for your needs following core design
            thoery
          </p>
          <h4 className="text-teal-600 py-4 font-medium">
            Web Development Tools I use
          </h4>
          <p className="text-gray-800 py-1 ">React</p>
          <p className="text-gray-800 py-1 ">Angular</p>
          <p className="text-gray-800 py-1 ">CSS</p>
          <p className="text-gray-800 py-1 ">Javascript</p>
        </div>
        <div className="text-center shadow-2xl p-10 rounded-xl my-10 darkModeCard">
          <Image
            className="ml-[5.5rem] lg:ml-[24rem]"
            src={consulting}
            width={100}
            height={100}
          />
          <h3 className="text-lg font-medium pt-8 pb-2 ">Beautiful Design</h3>
          <p className="">
            Creating elegant design suited for your needs following core design
            thoery
          </p>
          <h4 className="text-teal-600 py-4 font-medium">
            Web Development Tools I use
          </h4>
          <p className="text-gray-800 py-1 ">React</p>
          <p className="text-gray-800 py-1 ">Angular</p>
          <p className="text-gray-800 py-1 ">CSS</p>
          <p className="text-gray-800 py-1 ">Javascript</p>
        </div>
      </div>
      <Portfolio />
    </div>
  );
};

export default Services;
