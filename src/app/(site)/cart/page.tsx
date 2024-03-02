import React from "react";

const cart = () => {
  return (
    <>
    <div className="h-screen mt-5 p-10 justify-center mt-3 ml-[70px] mr-[50px] border border-2">
      <div className="h-8 mt-[30px]">
        <p className="text-2xl font-bold underline decoration-black decoration-1 underline-offset-8 flex justify-center">Your Cart</p>
      </div>
      <div className="border-b-2 border-red-700 h-8 block flex flex-row mt-8 justify-between">
          <p className="inline-block w-3/6 font-bold border border-2">Book</p>
          <p className="inline-block w-1/6 font-bold flex justify-center border border-2">Price</p>
          <p className="inline-block w-1/6 font-bold flex justify-center border border-2">Quantity</p>
          <p className="inline-block w-32 text-right font-bold border border-2">Total</p>
      </div>
      <div className="border-b-2 border-red-700 w-full pt-8 pb-4 block flex flex-row justify-between border border-2 content-center">
          <div className="inline-block w-3/6 font-bold border border-2 flex flex-row">
            <img className="rounded-2 w-36 h-36" src="https://i.pinimg.com/564x/90/59/96/90599631f3186f08e73ec8553c00bda2.jpg" alt="Extra large avatar"></img>
            <div className="ml-6 flex flex-col justify-center border border-2 border-lime-400">
              <p className="text-2xl font-bold">Dummy Book - Chapter 1</p>
              <p className="text-base text-[#A8A8A8] font-normal">New Book</p>
              <p className="text-base text-[#A8A8A8] font-normal">By vendor's name</p>
            </div>
          {/* error: align center text */}
          </div>
          <p className="inline-block w-1/6 font-bold flex justify-center border border-2">50.00 ฿</p>
          <p className="inline-block w-1/6 font-bold flex justify-center border border-2">2</p>
          <p className="inline-block w-32 text-right font-bold border border-2">100.00 ฿</p>
      </div>
      <div className="border-b-2 border-red-700 w-full p-4 pt-8 pl-0 block flex flex-row border border-indigo-700">
      <div className="inline-block w-3/6 font-bold border border-2 flex flex-row">
            <img className="rounded-2 w-36 h-36" src="https://i.pinimg.com/564x/90/59/96/90599631f3186f08e73ec8553c00bda2.jpg" alt="Extra large avatar"></img>
            <div className="ml-6 flex flex-col justify-center border border-2 border-lime-400">
              <p className="text-2xl font-bold">Dummy Book - Chapter 1</p>
              <p className="text-base text-[#A8A8A8] font-normal">New Book</p>
              <p className="text-base text-[#A8A8A8] font-normal">By vendor's name</p>
            </div>
          </div>
      </div>
      {/* error: Checkout button make grid? */}
      <div className="border border-2 flex flex-wrap w-[300px] absolute right-[106.5px]">
        <div className="border border-2">
          <p className="text-base text-right">Subtotal</p>
        </div>
        <div className="border border-2">
          <p className="text-2xl font-bold">150.00 ฿</p>
        </div>
        <div className="border border-2">
          <p className="italic">shipping cost calculated at checkout</p>
        </div>
        <div className="border border-2">
          <button className="rounded-md bg-[#F9BC60] text-[#FFFFFF] px-10 py-2">Check out -&gt;</button>
        </div>
      </div>
    </div>;
    </>
  );
};

export default cart;
