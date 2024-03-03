"use client";
import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

function Subtotal() {
  const pathname = usePathname();
  return (
    <div className="flex inline-block">
      <div className="inline-block">
          <div className="border border-indigo-700">
            <div className="border-b-[1px] border-black ml-8 pb-4">
                <div className="inline-block border border-2 flex flex-row">
                  <img className="rounded-2 w-36 h-36" src="https://i.pinimg.com/564x/90/59/96/90599631f3186f08e73ec8553c00bda2.jpg" alt="Extra large avatar"></img>
                  <div className="ml-6 flex flex-col justify-center border border-2 border-lime-400">
                    <p className="text-2xl font-bold">Dummy Book - Chapter 1</p>
                    <p className="text-base text-[#A8A8A8] font-normal">New Book</p>
                    <p className="text-base text-[#A8A8A8] font-normal">By vendor's name</p>
                  </div>
                </div>
                <div className="inline-block border border-2 flex flex-row">
                  <img className="rounded-2 w-36 h-36" src="https://i.pinimg.com/564x/90/59/96/90599631f3186f08e73ec8553c00bda2.jpg" alt="Extra large avatar"></img>
                  <div className="ml-6 flex flex-col justify-center border border-2 border-lime-400">
                    <p className="text-2xl font-bold">Dummy Book - Chapter 1</p>
                    <p className="text-base text-[#A8A8A8]">New Book</p>
                    <p className="text-base text-[#A8A8A8]">By vendor's name</p>
                  </div>
                </div>
            </div>
            <div className="ml-8 mt-6">
              <div className="block flex flex-row justify-between">
                <p className="">Subtotal</p>
                <p className="">150.00 ฿</p>
              </div>
              <div className="block flex flex-row justify-between">
                <p>Shipping</p>
                <p>Calculate at next step</p>
              </div>
              <div className="flex justify-end mt-6">
                <button className="rounded-md bg-[#F9BC60] text-[#FFFFFF] px-10 py-2">Next &#8594;</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Subtotal;
