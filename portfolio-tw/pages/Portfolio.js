import Image from "next/image";
import React from "react";
import pro1 from "../public/pro1.png";
import pro2 from "../public/pro2.png";
import pro3 from "../public/pro3.png";
import pro4 from "../public/pro4.png";
import pro5 from "../public/pro5.png";
import pro6 from "../public/pro6.png";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <div>
      <h3 className="lg:text-3xl text-2xl py-1 darkModeText">Portfolio</h3>
      <p className="font-normal lg:text-lg text-base py-2 leading-8 text-gray-800 darkModeText">
        Since the beginning of my journey as a freelancer developer, I have done
        remote work for
        <span className="text-teal-500"> Agencies </span>
        consulted for <span className="text-teal-500"> startups </span>
        and collaborated with talented people to create digital products for
        both business and consumer use.
      </p>
      <p className="lg:text-lg text-base  py-2 leading-8 text-gray-800 darkModeText">
        I offer wide range of services, including brand design, programming and
        teaching
      </p>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <PortfolioCard img={pro1} />
        <PortfolioCard img={pro2} />
        <PortfolioCard img={pro3} />
        <PortfolioCard img={pro4} />
        <PortfolioCard img={pro5} />
        <PortfolioCard img={pro6} />
      </div>
    </div>
  );
};

export default Portfolio;
