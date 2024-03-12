"use client";
import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

function AddressManagement() {
  const pathname = usePathname();
  return (
    <div className="inline-block">
      {/* first row */}
      <div className="flex items-stretch">
        <Link href="/shipping/chooseadd">
          <div className={`border rounded-lg p-4 flex items-start w-[260px] h-[120px] py-6 mr-2 ${
              pathname == "/shipping/chooseadd"
                ? "bg-[#FFF1DC] border-2 border-[#FFA826] text-black"
                : "bg-white border-2 border-[#A8A8A8]"
              }`}>
              <input id="select" className="peer/draft inline-block border-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="status" value="select"/>
              <label htmlFor="select" className="peer-checked/draft:text-sky-500 ml-2 relative top-[-8px]">
              <p className="font-bold text-lg">Choose your address</p>
              <p className="text-sm">Select your previosly saved address.</p>
              <p className="font-bold text-sm">You have 2 address now.</p>
            </label>
          </div>
        </Link>

        <Link href="/shipping/newadd">
          <div className={`border rounded-lg p-4 flex items-start w-[260px] h-[120px] py-6 ${
              pathname == "/shipping/newadd"
                ? "bg-[#FFF1DC] border-2 border-[#FFA826] text-black"
                : "bg-white border-2 border-[#A8A8A8]"
              }`}>
              <input id="select" className="peer/draft inline-block border-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="status" value="select"/>
              <label htmlFor="select" className="peer-checked/draft:text-sky-500 ml-2 relative top-[-8px]">
                <div>
                  <p className="font-bold text-lg">Add new address</p>
                  <p className="text-sm">Fill out the address form and can save your information to use for the next time</p>
                </div>
              </label>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default AddressManagement;
