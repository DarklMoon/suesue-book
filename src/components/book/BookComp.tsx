"use client";
import React from "react";
import Image from "next/image";

const BookComp = () => {
  return (
    <div className="w-full h-30 flex justify-center flex-col">
      <Image
        src="/BookImg-example.png"
        width={180}
        height={50}
        alt="test"
        style={{ borderRadius: "10px" }}
      />
      <h1 className="font-bold text-[15px] line-clamp-1 w-29">One punchas</h1>
      <h1>10.00 $</h1>
    </div>
  );
};

export default BookComp;
