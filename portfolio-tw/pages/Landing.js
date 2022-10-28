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
      <h2 className="text-5xl py-2 text-teal-600 font-medium">Ashish Shukla</h2>
      <h3 className="text-2xl py-2">Developer and Designer.</h3>
      <p className="font-serif text-gray-800 leading-7 py-5">
        Freelancer services provider for frontend development reach out to me on
        below social media link
      </p>
      <div className="text-5xl text-gray-600 gap-16 py-3 flex justify-center">
        <AiFillTwitterCircle className="cursor-pointer hover:scale-110" />
        <AiFillLinkedin className="cursor-pointer hover:scale-110" />
        <AiFillYoutube className="cursor-pointer hover:scale-110" />
      </div>
      {/* lg:w-[20rem] w-72 h-72 lg:h-[19rem] lg:ml-[25rem] pr-[6rem] */}
      <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mx-auto  mt-14">
        <Image src={devAs} fill style={{ background: "cover" }} />
      </div>
    </div>
  );
};

export default Landing;
