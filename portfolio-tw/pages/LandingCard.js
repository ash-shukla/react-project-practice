import Image from "next/image";
import React from "react";

const LandingCard = (props) => {
  return (
    <div className=" text-center shadow-2xl lg:p-6 p-10 rounded-2xl lg:my-6 my-10 darkModeCard lg:w-[24rem] lg:h-[36rem] ">
      <div className="ml-[3.5rem] lg:ml-[6.5rem] w-[140px] ">
        <Image className="" src={props?.img} width={"100%"} height={"100%"} />
      </div>
      <h3 className="lg:text-xl text-base font-semibold pt-8 pb-2 ">
        Beautiful Design
      </h3>
      <p className="lg:text-xl text-sm font-medium">
        Creating elegant design suited for your needs following core design
        thoery
      </p>
      <h4 className="text-teal-600 py-4 lg:text-xl text-sm font-medium ">
        Web Development Tools I use
      </h4>
      <p className="text-gray-800 py-1 lg:text-xl text-sm font-medium ">
        React
      </p>
      <p className="text-gray-800 py-1 lg:text-xl text-sm font-medium ">
        Angular
      </p>
      <p className="text-gray-800 py-1 lg:text-xl text-sm font-medium ">CSS</p>
      <p className="text-gray-800 py-1 lg:text-xl text-sm font-medium ">
        Javascript
      </p>
    </div>
  );
};

export default LandingCard;
