"use client";
import { Fragment, useEffect } from "react";
import {
  Bars3CenterLeftIcon,
  PencilIcon,
  ChevronDownIcon,
  CreditCardIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";
import { BellIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Menu, Transition, Popover } from "@headlessui/react";
import Link from "next/link";

// import { useSelector } from "react-redux";
// import { UserSelector } from "@/redux/slices/UserSlice";
// import { UserType } from "@/types";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function TopBar() {
  // const UserReducer = useSelector(UserSelector);

const handleLogout = async () => {
  await Cookies.remove('session');
  router.push("/login");
};

  const user = localStorage.getItem("user");
//   if (!user) {
//     return null;
//   }
//   const user1 = JSON.parse(user);
  let user1 = null;
  const router = useRouter();
  // useEffect(() => {
  //   user1 = JSON.parse(localStorage.getItem("user") ?? "null") ?? null;
  // }, []);
  return (
    <div
      className={`fixed top-0 right-0 w-full  py-5 flex justify-between items-center transition-all  `}
    >
      <div className="pl-4 md:pl-16">
        {/* <Bars3CenterLeftIcon
          className="h-8 w-8 text-gray-700 cursor-pointer"
          onClick={() => console.log("clicked")}
        /> */}
      </div>
      <div className="flex items-center pr-4 md:pr-16">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center items-center">
              <picture>
                <img
                  src="https://avatars.githubusercontent.com/u/55942632?v=4"
                  className="rounded-full h-8 md:mr-4 border-2 border-white shadow-sm"
                  alt="profile picture"
                />
              </picture>
              {user1 && (
                <span className="hidden md:block font-medium text-gray-700">
                  {user1.fname}
                </span>
              )}
              <ChevronDownIcon className="ml-2 h-4 w-4 text-gray-700" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-sm">
              <div className="p-1">
                <Menu.Item>
                  <div
                    onClick={handleLogout}
                    className="flex hover:bg-orange-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                  >
                    <LogOutIcon className="h-4 w-4 mr-2" />
                    LogOut
                  </div>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
