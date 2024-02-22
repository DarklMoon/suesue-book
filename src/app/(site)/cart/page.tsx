import React from "react";

const cart = () => {
  return (
    <>
    <div className="h-screen mt-5 p-10 justify-center mt-3 ml-[70px] mr-[50px]">
      <div className="h-8 flex justify-center mt-[30px]">
        <p className="text-2xl font-bold underline decoration-black decoration-1 underline-offset-8">Your Cart</p>
      </div>
      <div className="border-b-2 border-red-700 w-full h-8 block flex flex-row mt-8">
          <p className="inline-block w-3/6 font-bold">Book</p>
          <p className="inline-block w-1/6 font-bold">Price</p>
          <p className="inline-block w-1/6 font-bold">Quantity</p>
          <p className="inline-block w-1/6 text-right font-bold">Total</p>
      </div>
      <div className="border-b-2 border-red-700 w-full p-4 pt-8 block flex flex-row">
          <img className="rounded-2 w-36 h-36" src="https://i.pinimg.com/564x/90/59/96/90599631f3186f08e73ec8553c00bda2.jpg" alt="Extra large avatar"></img>
          <div>
            <p className="text-2xl font-bold">Dummy Book - Chapter 1</p>
            <p className="text-base">New Book</p>
            <p className="text-base">By vendor's name</p>
          </div>
      </div>
      <div className="border-b-2 border-red-700 w-full p-4 pt-8 block flex flex-row">
          <img className="rounded-2 w-36 h-36" src="https://i.pinimg.com/564x/90/59/96/90599631f3186f08e73ec8553c00bda2.jpg" alt="Extra large avatar"></img>
      </div>
    </div>;
    </>
  );
};

export default cart;
