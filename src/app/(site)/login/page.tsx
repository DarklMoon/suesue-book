import React from "react";

const register = () => {
  return (
    <>
  <div className="w-full bg-slate-500 h-[650px] mt-[50px] flex justify-center items-center">
        <div className="w-[450px] h-[650px] outline ring-black rounded-md bg-[#FFFFFF]">
            <h1 className="text-[24px] ml-[30px] mt-[15px] font-semibold">Login with Password</h1>
            <h3 className="ml-[30px] mt-3">Email</h3>
            <input className="border-2 border-[#B5B5B5] ml-[30px] w-[386px]"></input>
            <h3 className="ml-[30px]">Username</h3>
            <input className="border-2 border-[#B5B5B5] ml-[30px] w-[386px]"></input>
            <h3 className="ml-[30px]">Password</h3>
            <input className="border-2 border-[#B5B5B5] ml-[30px] w-[386px]"></input>
            <p className="text-center mt-[20px]">- Create your account <a href="localhost:3000/Home">here!</a> -</p>
            <button className="rounded-xl bg-[#F9BC60]">Sign in</button>
            
        </div>
    </div>
  </>
  );
};

export default register;