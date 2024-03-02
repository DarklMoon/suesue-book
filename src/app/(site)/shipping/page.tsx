import React from "react";

const shipping = () => {
  return (
    <>
    <div className="h-screen mt-5 p-10 justify-center mt-3 ml-[70px] mr-[50px] border border-2">
      <p>Shipping address</p>
      <p>Select your address</p>

      
      <div className="grid grid-cols-[600px_auto]">

        {/* first row */}
        <div className="border border-indigo-700">

          {/* Add new address */}
          <div>
            <p>Choose your address</p>
            <p>Select your previosly saved address.</p>
            <p className="font-bold">You don't have any address now.</p>
          </div>
          <div>
            <p>Add new address</p>
            <p>Fill out the address form and can save your information to use for the next time</p>
          </div>

          {/* information group */}
          <div className="">
            <form className="table w-full">
              <label className="inline-block mx-1 my-2">
                <input type="text" className="peer border border-[#8C8C8C] pl-4 py-1 w-[285px]" placeholder="Name"/>
                {/* <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                  Please provide a valid email address.x
                </p> */}
              </label>
              <label className="inline-block mx-1 my-2">
                <input type="tel" className="peer border border-[#8C8C8C] pl-4 py-1 w-[285px]" placeholder="Phone"/>
              </label>
              <label className="block mx-1 my-2">
                <input type="text" className="peer border border-[#8C8C8C] pl-4 py-1 h w-[100%]" placeholder="Address"/>
              </label>
              <label className="inline-block mx-1 my-2">
                <input type="" className="peer border border-[#8C8C8C] pl-4 py-1 h" placeholder="Select province"/>
              </label>
              <label className="inline-block mx-1 my-2">
                <input type="text" className="peer border border-[#8C8C8C] pl-4 py-1 h" placeholder="District"/>
              </label>
              <label className="inline-block mx-1 my-2">
                <input type="text" className="peer border border-[#8C8C8C] pl-4 py-1 h" placeholder="Sub district"/>
              </label>
              <label className="inline-block mx-1 my-2">
                <input type="text" className="peer border border-[#8C8C8C] pl-4 py-1 h" placeholder="Postal code"/>
              </label>
              
            </form>
          </div>

        </div>

        {/* second row */}
        <div className="border border-indigo-700">
                <p>Second row test</p>
        </div>
      </div>
    </div>;
    </>
  );
};

export default shipping;
