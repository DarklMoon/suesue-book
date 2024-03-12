import React from "react";

type ModalProps = {
  isVisible: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="flex flex-col">
          <div className="font-white place-self-end" onClick={onClose}>
            X
          </div>
          <div className="bg-white p-2">
            <form className="table w-full border">
                <label className="block mx-1 mt-4">
                  <p>CARD NUMBER</p>
                  <input type="text" className="peer border border-[#8C8C8C] pl-4 py-1 w-[561px]" placeholder="Card Number"/>
                </label>
                <div className="flex mt-4 mb-1">
                  <label className="flex-grow ml-1">
                    <p>EXPIRATION DATE</p>
                    <input type="tel" className="peer border border-[#8C8C8C] pl-4 py-1 min-w-[265px]" placeholder="MM/YY"/>
                  </label>
                  <label className="flex-grow mr-1">
                    <p>CVC</p>
                  <input type="text" className="peer border border-[#8C8C8C] pl-4 py-1 w-full" placeholder="Security Code"/>
                  </label>
                </div>
                <label className="block mx-1 mt-4">
                  <p>NAME ON THE CARD</p>
                  <input type="text" className="peer border border-[#8C8C8C] pl-4 py-1 h w-[561px]" placeholder="Name"/>
                </label>
                <label className="block mx-1 mt-4">
                  <p>BILLING ADDRESS</p>
                  <input type="text" className="peer border border-[#8C8C8C] pl-4 py-1 h w-[561px]" placeholder="Address"/>
                </label>
                <label className="block mx-1 mt-4">
                  <input type="text" className="peer border border-[#8C8C8C] pl-4 py-1 h w-[561px]" placeholder="City"/>
                </label>
                <div className="inline-block mt-6x mb-1">
                  <label className="block mx-1 mt-4">
                    <input type="text" className="peer border border-[#8C8C8C] pl-4 py-1 h w-[561px]" placeholder="State/Province/Region"/>
                  </label>
                  <label className="block mx-1 mt-4">
                    <input type="text" className="peer border border-[#8C8C8C] pl-4 py-1 h w-[561px]" placeholder="Postal Code"/>
                  </label>
                </div>
                <div className=" bottom-0 right-0 mb-4 mr-1">
                  <button className="rounded-md bg-[#F9BC60] text-[#FFFFFF] px-10 py-2">Add +</button>
                </div>
              </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
