import React from "react";

type Props = {};

const cart = (props: Props) => {
  return (
    <>
    <div className="h-screen mt-5 p-10 mt-3 ml-[70px] mr-[50px] border border-2 grid">
      <div className="flex mt-[30px] justify-self-center justify-center pb-[10px] inline w-[150px]">
        <p className="text-2xl font-bold">Your Cart</p>        
      </div>
      <div className="border-t border-black w-[70px] justify-self-center block"></div>
      <div className="border-b-2 border-[#B7B7B7] h-8 block flex flex-row mt-8 justify-between">
          <p className="inline-block w-3/6 font-bold ">Book</p>
          <p className="inline-block w-1/6 font-bold flex justify-center ">Price</p>
          <p className="inline-block w-1/6 font-bold flex justify-center ">Quantity</p>
          <p className="inline-block w-32 text-right font-bold ">Total</p>
      </div>
      <div className="border-b-2 border-[#B7B7B7] w-full pt-8 pb-4 block flex flex-row justify-between  content-center">
          <div className="inline-block w-3/6 font-bold  flex flex-row">
            <img className="rounded-2 w-36 h-36" src="https://i.pinimg.com/564x/90/59/96/90599631f3186f08e73ec8553c00bda2.jpg" alt="Extra large avatar"></img>
            <div className="ml-6 flex flex-col justify-center">
              <p className="text-2xl font-bold">Dummy Book - Chapter 1</p>
              <p className="text-base text-[#A8A8A8] font-normal">New Book</p>
              <p className="text-base text-[#A8A8A8] font-normal">By vendor's name</p>
            </div>
          {/* error: align center text */}
          </div>
          <p className="inline-block w-1/6 flex justify-center self-center ">50.00 ฿</p>
          <p className="inline-block w-1/6 flex justify-center self-center ">2</p>
          <p className="inline-block w-32 text-right font-bold self-center ">100.00 ฿</p>
      </div>
      <div className="border-b-2 border-[#B7B7B7] w-full pt-8 pb-4 block flex flex-row justify-between  content-center">
          <div className="inline-block w-3/6 font-bold  flex flex-row">
            <img className="rounded-2 w-36 h-36" src="https://i.pinimg.com/564x/90/59/96/90599631f3186f08e73ec8553c00bda2.jpg" alt="Extra large avatar"></img>
            <div className="ml-6 flex flex-col justify-center">
              <p className="text-2xl font-bold">Dummy Book - Chapter 1</p>
              <p className="text-base text-[#A8A8A8] font-normal">New Book</p>
              <p className="text-base text-[#A8A8A8] font-normal">By vendor's name</p>
            </div>
          {/* error: align center text */}
          </div>
          <p className="inline-block w-1/6 flex justify-center self-center ">50.00 ฿</p>
          <p className="inline-block w-1/6 flex justify-center self-center ">2</p>
          <p className="inline-block w-32 text-right font-bold self-center ">100.00 ฿</p>
      </div>
      {/* error: Checkout button make grid? */}
      <div className="w-[260px] justify-self-end grid grid-cols2 my-8">
        
          <p className="text-base text-right self-end">Subtotal</p>
          <p className="text-2xl font-bold text-right">150.00 ฿</p>
          <p className="italic col-span-2 text-right my-2">shipping cost calculated at checkout</p>
          <button className="rounded-md bg-[#F9BC60] text-[#FFFFFF] font-bold px-10 py-2 col-span-2">Check out -&gt;</button>
      </div>
    </div>
    </>
  );
};

export default cart;
