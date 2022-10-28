import Image from "next/image";
import React from "react";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import design from "../public/design.png";
import LandingCard from "./LandingCard";
import Portfolio from "./Portfolio";

const Services = () => {
  return (
    <div className="text-center">
      <h3 className="lg:text-3xl text-2xl font-semibold lg:font-medium py-1 darkModeText">
        Services I offer
      </h3>
      <p className="font-normal lg:text-lg text-sm py-2 leading-8 text-gray-800 darkModeText">
        Since the beginning of my journey as a freelancer developer, I have done
        remote work for
        <span className="text-teal-500 "> Agencies </span>
        consulted for <span className="text-teal-500 "> startups </span>
        and collaborated with talented people to create digital products for
        both business and consumer use.
      </p>
      <p className="lg:text-lg text-sm py-2 leading-8 text-gray-800 darkModeText">
        I offer wide range of services, including brand design, programming and
        teaching
      </p>
      <div className=" flex flex-col justify-center text-center lg:flex-row lg:gap-4">
        {/* <div className="lg:flex lg:flex-row"> */}
        <div>
          <LandingCard img={design} />
        </div>
        <div>
          <LandingCard img={code} />
        </div>
        <div>
          <LandingCard img={consulting} />
        </div>
        {/* </div> */}
      </div>
      <Portfolio />
    </div>
  );
};

export default Services;
