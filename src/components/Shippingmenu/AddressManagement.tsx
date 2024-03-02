"use client";
import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

function AddressManagement() {
  const pathname = usePathname();
  return (
    <div className="flex">
        <div className="grid grid-cols-[600px_auto]">

        {/* first row */}
        <div className="border border-indigo-700">
      <Link href="/shipping/chooseadd">
        <div className={`border rounded-lg inline-block flex flex-row items-start ${
            pathname == "/shipping/chooseadd"
              ? "bg-[#C75656] text-white shadow-xl shadow-[#C98080]"
              : "bg-gray-100"
          }`}>
            <input id="choose" className="peer/draft" type="radio" name="status" value="choose"/>
            <label for="choose" class="peer-checked/draft:text-sky-500">
            <p>Choose your address</p>
            <p>Select your previosly saved address.</p>
            <p className="font-bold">You don't have any address now.</p>
            </label>
        </div>
      </Link>

      <Link href="/shipping/newadd">
        <div className={`border rounded-lg inline-block ${
            pathname == "/shipping/newadd"
              ? "bg-[#C75656] text-white shadow-xl shadow-[#C98080]"
              : "bg-gray-100"
          }`}>
            <input id="select" className="peer/draft" type="radio" name="status" value="select"/>
            <label for="select" class="peer-checked/draft:text-sky-500">
            <p>Add new address</p>
            <p>Fill out the address form and can <br/>save your information to use for <br/>the next time</p>
            </label>
        </div>
      </Link>
        </div>
        </div>
        <div>
            <div className="border border-indigo-700">
            {/* Add new address */}
            <div className="border-b-[1px] border-black ml-8 pb-4">
                <div className="inline-block font-bold border border-2 flex flex-row">
                <img className="rounded-2 w-36 h-36" src="https://i.pinimg.com/564x/90/59/96/90599631f3186f08e73ec8553c00bda2.jpg" alt="Extra large avatar"></img>
                <div className="ml-6 flex flex-col justify-center border border-2 border-lime-400">
                    <p className="text-2xl font-bold">Dummy Book - Chapter 1</p>
                    <p className="text-base text-[#A8A8A8] font-normal">New Book</p>
                    <p className="text-base text-[#A8A8A8] font-normal">By vendor's name</p>
                </div>
                </div>
                <div className="inline-block font-bold border border-2 flex flex-row">
                <img className="rounded-2 w-36 h-36" src="https://i.pinimg.com/564x/90/59/96/90599631f3186f08e73ec8553c00bda2.jpg" alt="Extra large avatar"></img>
                <div className="ml-6 flex flex-col justify-center border border-2 border-lime-400">
                    <p className="text-2xl font-bold">Dummy Book - Chapter 1</p>
                    <p className="text-base text-[#A8A8A8] font-normal">New Book</p>
                    <p className="text-base text-[#A8A8A8] font-normal">By vendor's name</p>
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

export default AddressManagement;
