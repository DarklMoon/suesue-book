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
          <div className={`border rounded-lg inline-block flex flex-row items-start mr-2 ${
            pathname == "/shipping/chooseadd"
              ? "bg-[#C75656] text-white shadow-xl shadow-[#C98080]"
              : "bg-gray-100"
            }`}>
            <input id="choose" className="peer/draft" type="radio" name="status" value="choose"/>
            <label for="choose" class="peer-checked/draft:text-sky-500">
              <p>Choose your address</p>
              <p>Select your previosly saved address.</p>
              <br/>
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
  );
}

export default AddressManagement;
