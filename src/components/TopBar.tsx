"use client";
import { Fragment } from "react";
import {
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { Menu, Transition } from "@headlessui/react";
import { BsCart } from "react-icons/bs";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

type User = {
  // Define the user object structure here
  email: string;
  username?: string;
  user_id?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  role?: string;
  // Add other user properties as needed
};

// Define the props for the TopBar component
interface TopBarProps {
  user: User;
}


export default function TopBar({ user }: TopBarProps) {
  const { toast: showToast } = useToast();

  const handleLogout = async () => {
    try {
      const response = await fetch("api/auth", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      });
      if (response) {
        const result = await response.json();
        console.log("Result: ->", result);
        router.refresh();
        showToast({
          description: "Logout success!",
          variant: "default",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("TRANSACTION_ENDING");
    }
  };

  const router = useRouter();

  return (
    <div
      className={`fixed top-0 right-0 w-full  py-5 flex justify-between items-center transition-all  `}
    >
      <div className="pl-4 md:pl-16">
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
              {user && (
                <span className="hidden md:block font-medium text-gray-700">
                  {user.username}
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
                    onClick={()=>{router.push("/cart")}}
                    className="flex hover:bg-orange-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center"
                  >
                    <BsCart className="h-4 w-4 mr-2" />
                    Cart
                  </div>
                </Menu.Item>
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
