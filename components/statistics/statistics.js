import React from "react";
import Image from "next/image";

function Statistics({ className, picOne, title, subtitle }) {
  return (
    <div className={className}>
      <Image src={picOne} className="w-full px-6 mt-5 lg:w-[50%]" alt="statistics" />
      <span className="px-6 lg:w-[50%]">
        <h1 className="text-sm font-semibold lg:text-3xl">{title}</h1>
        <hr className="border-4 border-primary rounded-lg w-16 mt-2" />
        <h3 className="mt-1 lg:text-[26px] lg:leading-[40px]">
         {subtitle}
        </h3>
        <button className="w-36 px-6 py-2 bg-primary rounded-3xl text-white font-medium mt-4">SEE DETAIL</button>
      </span>
    </div>
  );
}

export default Statistics;
