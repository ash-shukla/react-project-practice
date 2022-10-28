import Image from "next/image";
import React from "react";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import design from "../public/design.png";

const Services = () => {
  return (
    <div>
      <h3 className="text-3xl py-1">Services I offer</h3>
      <p className="font-normal text-lg py-2 leading-8 text-gray-800">
        Since the beginning of my journey as a freelancer developer, I have done
        remote work for
        <span className="text-teal-500"> Agencies </span>
        consulted for <span className="text-teal-500"> startups </span>
        and collaborated with talented people to create digital products for
        both business and consumer use.
      </p>
      <p className="text-lg py-2 leading-8 text-gray-800">
        I offer wide range of services, including brand design, programming and
        teaching
      </p>
      <div>
        <div>
          <Image src={design} width={100} height={100} />
          <h3>Beautiful Design</h3>
          <p>
            Creating elegant design suited for your needs following core design
            thoery
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
