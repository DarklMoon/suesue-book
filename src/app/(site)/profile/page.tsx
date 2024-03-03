import React from "react";

const profile = () => {
  return (
    <>
  <div className="mt-5 p-10 justify-center mt-3 ml-[70px] mr-[50px] border border-4">
    <div className="border-b-2 border-black mb-4 w-6/12 pl-2 ml-[-10px]">
      <p className="text-2xl font-bold inline-block">Profile</p>
      <p className="text-sm text-[#AAAAAA] inline-block ml-3">Manage your profile</p>
    </div>

    {/* Row 1 */}
    <div className="relative grid grid-cols-2 gap-4 mt-[100px] ">

      {/* First column */}
      <div className="flex border justify-center">
        <div className="border border-2 border-white flex justify-center grid grid-row-2">
          {/* Profile template */}
          <div className="flex justify-center items-center">
            <img className="rounded-full w-36 h-36" src="https://i.pinimg.com/564x/90/59/96/90599631f3186f08e73ec8553c00bda2.jpg" alt="Extra large avatar"></img>
          </div>
          <div className="inline-block border">
            <div className="border border-2 border-pink inline-block">
              <h3>Choose file to upload</h3>
            </div>
            <div className="inline-block">
              <label className="cursor-pointer">
                <span>Browser Files</span>
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
      <div className="border-solid border-2 border-black h-80 inline-block grid grid-cols-2">
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
          <button className="rounded-l bg-[#F9BC60] ml-7 mt-5 text-white px-4 py-2">Edit Profile</button>
        </div>
      </div>
    </div>

    {/* Row 2 */}
      {/* Row 1 */}
    <div className="col-span-2 border-2 mt-10">
      <div className="border-2 inline-block">
        <p>filter</p>
      </div>
      <form className="inline-block">   
          <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
              <div className="absolute inset-y-0 end-2 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-2 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search.." required />
          </div>
      </form>
      <div className="inline-block">
              
        
        <div date-rangepicker className="flex items-center">
          <div
            className="relative mb-3"
            data-te-datepicker-init
            data-te-inline="true"
            data-te-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="Select a date" />
            <label
              for="floatingInput"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >Select a date</label
            >
          </div>
          <span className="mx-4 text-gray-500">to</span>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <input datepicker datepicker-autohide name="end" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end"/>
        </div>
        </div>


      </div>

      <div className="grid grid-cols-3 gap-8 p-6 border-2">
            <button className="border-2">
              <div className="text-left m-4">
                <p>Order ID</p><br/>
                <p>Date: yyyy/mm/dd</p>
                <p>Total Items: 3</p>
                <p>Total Price: 100฿</p>
              </div>
            </button>
            <button className="border-2">
              <div className="text-left m-4">
                <p>Order ID</p><br/>
                <p>Date: yyyy/mm/dd</p>
                <p>Total Items: 3</p>
                <p>Total Price: 100฿</p></div>  
            </button>
            <button className="border-2">
              <div className="text-left m-4">
                <p>Order ID</p><br/>
                <p>Date: yyyy/mm/dd</p>
                <p>Total Items: 3</p>
                <p>Total Price: 100฿</p>
              </div>
            </button>
            <button className="border-2">
              <div className="text-left m-4">
                <p>Order ID</p><br/>
                <p>Date: yyyy/mm/dd</p>
                <p>Total Items: 3</p>
                <p>Total Price: 100฿</p>
              </div>
            </button>
            <button className="border-2">
              <div className="text-left m-4">
                <p>Order ID</p><br/>
                <p>Date: yyyy/mm/dd</p>
                <p>Total Items: 3</p>
                <p>Total Price: 100฿</p></div>  
            </button>
            <button className="border-2">
              <div className="text-left m-4">
                <p>Order ID</p><br/>
                <p>Date: yyyy/mm/dd</p>
                <p>Total Items: 3</p>
                <p>Total Price: 100฿</p>
              </div>
            </button>
            <button className="border-2">
              <div className="text-left m-4">
                <p>Order ID</p><br/>
                <p>Date: yyyy/mm/dd</p>
                <p>Total Items: 3</p>
                <p>Total Price: 100฿</p>
              </div>
            </button>
            <button className="border-2">
              <div className="text-left m-4">
                <p>Order ID</p><br/>
                <p>Date: yyyy/mm/dd</p>
                <p>Total Items: 3</p>
                <p>Total Price: 100฿</p></div>  
            </button>
            <button className="border-2">
              <div className="text-left m-4">
                <p>Order ID</p><br/>
                <p>Date: yyyy/mm/dd</p>
                <p>Total Items: 3</p>
                <p>Total Price: 100฿</p>
              </div>
            </button>
      </div>
    </div>
  </div>
  </>
  );
};

export default profile;