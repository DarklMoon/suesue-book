import React from "react";

const cart = () => {
  return (
    <>
    <div className="h-screen mt-5 p-10 flex flex-col justify-center mt-3">
      <div className="border-b-2 border-black h-8 block">
        <h1>Your Cart</h1>
      </div>
      <div className="border-b-2 border-red-700 w-full h-8 block flex- flex-row">
          <h3 className="inline-block w-3/6">Book</h3>
          <h3 className="inline-block w-1/6">Price</h3>
          <h3 className="inline-block w-1/6">Quantity</h3>
          <h3 className="inline-block w-1/6 text-right">Total</h3>
      </div>
    </div>;
    </>
  );
};

export default cart;
