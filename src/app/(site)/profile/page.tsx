import React from "react";

const profile = () => {
  return (
    <>
  <div className="w-full bg-slate-500 h-[650px] mt-[50px] flex">
    <div className="ml-[50px] border-b-5 border-black">
      <div className="ml-[50px]">
        <h1 className="inline-block">Profile</h1>
      </div>
      <div className="ml -[100px]">
        <h3 className="text-[#AAAAAA]">Manage your profile</h3>
      </div>
    </div>
    <div className="relative grid grid-cols-2 border border-2 border-black mt-[100px]">
      <div className="border border-2 border-white flex justify-center grid grid-row-2">
        {/* Profile template */}
        <div className="border border-2 border-pink">
          <img class="rounded-full w-36 h-36" src="https://i.pinimg.com/564x/90/59/96/90599631f3186f08e73ec8553c00bda2.jpg" alt="Extra large avatar"></img>
        </div>
        <div>
          <div className="border border-2 border-pink">
            <h3>Choose file to upload</h3>
          </div>
          <div className="border border-2 border-pink">
            <h3>Browser Files</h3>
            <input type="file" class="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100
            "/>
          </div>
        </div>
      </div>
      <div className="border-solid border-2 border-black mr-4 w-2/3 h-80 inline-block grid grid-cols-2">
        {/* fix position of div box */}
        <div>
          <h3 className="ml-[30px] mt-3">First Name</h3>
            <input className="border-2 border-[#B5B5B5] ml-[30px] w-[386px]"></input>
        </div>
        <div>
          <h3 className="ml-[30px] mt-3">Last Name</h3>
            <input className="border-2 border-[#B5B5B5] ml-[30px] w-[386px]"></input>
        </div>
        <div>
          <h3 className="ml-[30px] mt-3">Phone Number</h3>
            <input className="border-2 border-[#B5B5B5] ml-[30px] w-[386px]"></input>
        </div>
        <div>
          <h3 className="ml-[30px] mt-3">Email</h3>
            <input className="border-2 border-[#B5B5B5] ml-[30px] w-[386px]"></input>
        </div>
        <div>
          <h3 className="ml-[30px] mt-3">Username</h3>
            <input className="border-2 border-[#B5B5B5] ml-[30px] w-[386px]"></input>
        </div>
        <div>

        </div>
        <div>
          <button className="rounded-l bg-[#F9BC60] ml-7 mt-5">Edit Profile</button>
        </div>
      </div>
    </div>
  </div>
  </>
  );
};

export default profile;