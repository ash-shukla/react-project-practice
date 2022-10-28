import Image from "next/image";
import React from "react";
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai";
import devAs from "../public/dev-as-wave.png";

const Landing = () => {
  return (
    <div className="text-center p-6">
      <h2 className="lg:text-5xl text-3xl py-2 text-teal-600 lg:font-medium  ">
        Ashish Shukla
      </h2>
      <h3 className="lg:text-2xl text-xl py-2 darkModeText">
        Developer and Designer.
      </h3>
      <p className="font-serif text-gray-800 leading-7 py-5 lg:text-xl text-base max-w-xl mx-auto darkModeText">
        Freelancer services provider for frontend development reach out to me on
        social media link below. Lets get cracking
      </p>
      <div className="text-5xl text-gray-600 gap-16 py-3 flex justify-center">
        <AiFillTwitterCircle className="cursor-pointer hover:scale-110" />
        <AiFillLinkedin className="cursor-pointer hover:scale-110" />
        <AiFillYoutube className="cursor-pointer hover:scale-110" />
      </div>
      <div className="relative bg-gradient-to-b from-teal-500 rounded-full lg:w-80 lg:h-80 w-60 h-60 mx-auto mt-14 ml-7 md:ml-8 lg:ml-[18rem]">
        <Image src={devAs} />
      </div>
    </div>
  );
};

export default Landing;
