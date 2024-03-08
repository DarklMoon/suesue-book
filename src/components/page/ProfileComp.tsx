"use client";
import React from "react";
import Link from "next/link";
import DatePicker from "@/components/Datepicker"

type Props = {};

const Profile = (props: Props) => {
  return (
    <>
  <div className="mt-5 p-10 justify-center mt-3 ml-[70px] mr-[50px]">
    <div className="border-b-2 border-black mb-4 w-6/12 pl-2 ml-[-10px]">
      <p className="text-2xl font-bold inline-block">Profile</p>
      <p className="text-sm text-[#AAAAAA] inline-block ml-3">Manage your profile</p>
    </div>

    {/* Row 1 */}
    <div className="relative grid grid-cols-2 gap-4 mt-[50px] ">

      {/* First column */}
      <div className="flex border justify-center">
        <div className="border border-2 border-white flex justify-center grid grid-row-2">
          {/* Profile template */}
          <div className="flex justify-center items-center">
            <img className="rounded-full w-36 h-36" src="https://i.pinimg.com/564x/90/59/96/90599631f3186f08e73ec8553c00bda2.jpg" alt="Extra large avatar"></img>
          </div>
          <div className="inline-block">
            <div className="border-2 border-[#AFAFAF] bg-white px-3 py-[5px] text-[#B7B7B7] rounded-sm inline-block">
              <h3>Choose file to upload</h3>
            </div>
            <div className="inline-block">
              <label className="cursor-pointer">
                <span className="border-2 border-[#AFAFAF] bg-[#D9D9D9] px-3 py-2 text-white rounded-sm">Browser Files</span>
                <input type="file" className="hidden"/>
              </label>
            </div>
          </div>
            {/* <div className="border border-2 border-pink inline-block">
              <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide cursor-pointer">
                  <span className="mt-2 text-base leading-normal">Select a file</span>
                  <input type='file' className="hidden" />
              </label>
            </div> */}
        </div>
      </div>

      {/* Second column */}
      <div className="border-solid border-2 border-[#B7B7B7] h-80 inline-block grid grid-cols-2">
        {/* fix position of div box */}
        <div>
          <h3 className="ml-[30px] mt-4">First Name</h3>
            <input className="border-2 border-[#B5B5B5] ml-[30px] mt-2 w-[200px]"></input>
        </div>
        <div>
          <h3 className="ml-[30px] mt-4">Last Name</h3>
            <input className="border-2 border-[#B5B5B5] ml-[30px] mt-2 w-[200px]"></input>
        </div>
        <div>
          <h3 className="ml-[30px] mt-3">Phone Number</h3>
            <input className="border-2 border-[#B5B5B5] ml-[30px] mt-2 w-[200px]"></input>
        </div>
        <div>
          <h3 className="ml-[30px] mt-3">Email</h3>
            <input className="border-2 border-[#B5B5B5] ml-[30px] mt-2 w-[200px]"></input>
        </div>
        <div>
          <h3 className="ml-[30px] mt-3">Username</h3>
            <input className="border-2 border-[#B5B5B5] ml-[30px] mt-2 w-[200px]"></input>
        </div>
        <div>

        </div>
        <div>
          <button className="rounded-l bg-[#F9BC60] ml-7 my-5 text-white px-4 py-2">Edit Profile</button>
        </div>
      </div>
    </div>

    {/* Row 2 */}
      {/* Row 1 */}
    <div className="col-span-2 mt-10 border-2 border-[#B7B7B7]">
      <div className="w-[700px] flex items-center space-x-3 p-3">
        <div className="inline-block">
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22.75 7C22.75 7.41421 22.4142 7.75 22 7.75L2 7.75C1.58579 7.75 1.25 7.41421 1.25 7C1.25 6.58579 1.58579 6.25 2 6.25L22 6.25C22.4142 6.25 22.75 6.58579 22.75 7Z" fill="#B4B4B4"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.75 12C19.75 12.4142 19.4142 12.75 19 12.75L5 12.75C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25L19 11.25C19.4142 11.25 19.75 11.5858 19.75 12Z" fill="#B4B4B4"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.75 17C16.75 17.4142 16.4142 17.75 16 17.75H8C7.58579 17.75 7.25 17.4142 7.25 17C7.25 16.5858 7.58579 16.25 8 16.25H16C16.4142 16.25 16.75 16.5858 16.75 17Z" fill="#B4B4B4"/>
          </svg>
        </div>

        {/* Search */}
        <form className="inline-block">   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 end-2 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-2 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search.." required />
            </div>
        </form>
          
        {/* Date picker */}
        <div date-rangepicker className="flex space-x-3 items-center">
          <div className="flex items-center">
            <DatePicker/>
          </div>  

          <div className="flex items-center">
            <DatePicker/>
          </div>  
        </div>

      </div>

      <div className="grid grid-cols-3 gap-8 p-6">
            <Link href="/order">
              <button className="border bg-[#DBDBDB] border-black rounded w-[320px]">
                <div className="text-left m-4">
                  <p>Order ID</p><br/>
                  <p>Date: yyyy/mm/dd</p>
                  <p>Total Items: 3</p>
                  <p>Total Price: 100฿</p>
                </div>
              </button>
            </Link>
            <Link href="/order">
              <button className="border bg-[#DBDBDB] border-black rounded w-[320px]">
                <div className="text-left m-4">
                  <p>Order ID</p><br/>
                  <p>Date: yyyy/mm/dd</p>
                  <p>Total Items: 3</p>
                  <p>Total Price: 100฿</p>
                </div>
              </button>
            </Link>
            <Link href="/order">
              <button className="border bg-[#DBDBDB] border-black rounded w-[320px]">
                <div className="text-left m-4">
                  <p>Order ID</p><br/>
                  <p>Date: yyyy/mm/dd</p>
                  <p>Total Items: 3</p>
                  <p>Total Price: 100฿</p>
                </div>
              </button>
            </Link>
            <Link href="/order">
              <button className="border bg-[#DBDBDB] border-black rounded w-[320px]">
                <div className="text-left m-4">
                  <p>Order ID</p><br/>
                  <p>Date: yyyy/mm/dd</p>
                  <p>Total Items: 3</p>
                  <p>Total Price: 100฿</p>
                </div>
              </button>
            </Link>
            <Link href="/order">
              <button className="border bg-[#DBDBDB] border-black rounded w-[320px]">
                <div className="text-left m-4">
                  <p>Order ID</p><br/>
                  <p>Date: yyyy/mm/dd</p>
                  <p>Total Items: 3</p>
                  <p>Total Price: 100฿</p>
                </div>
              </button>
            </Link>
            <Link href="/order">
              <button className="border bg-[#DBDBDB] border-black rounded w-[320px]">
                <div className="text-left m-4">
                  <p>Order ID</p><br/>
                  <p>Date: yyyy/mm/dd</p>
                  <p>Total Items: 3</p>
                  <p>Total Price: 100฿</p>
                </div>
              </button>
            </Link>
      </div>
    </div>
  </div>
  </>
  );
};

export default Profile;