import Image from "next/image";
import React from "react";

const PortfolioCard = (props) => {
  return (
    <div className="basis-1/3 flex-1">
      <Image
        src={props?.img}
        className="rounded-lg h-[14rem] w-full lg:h-[18rem] "
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
};

export default PortfolioCard;
