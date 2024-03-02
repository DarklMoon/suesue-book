import { Button } from "@/components/ui/Button";
import React from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type Props = {};

const CreditPay = (props: Props) => {
  return (
    <>
      <div className="w-full h-[70px] mt-[80px] ml-[40px]">
        <h1 className="font-bold text-[20px]">
          Payment
          <span className="text-[grey] opacity-25 text-[10px]">
            {" "}
            Choose payment method below
          </span>
        </h1>
        <hr className="w-[250px] h-[10px] border-[black]"></hr>
      </div>

      <RadioGroup
        className="flex justify-center items-center"
        defaultValue="option-two"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Pay with credit card</Label>
        </div>
        <div className="flex items-center space-x-2 ml-[70px]">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Pay with QR code</Label>
        </div>
        <div className="flex items-center space-x-2 ml-[70px]">
          <RadioGroupItem value="option-three" id="option-three" />
          <Label htmlFor="option-two">Cash on delivery</Label>
        </div>
      </RadioGroup>

      <div className="w-full h-[500px] mt-[30px] flex justify-center items-center">
        <div className="w-[300px] h-[300px] bg-slate-500"></div>

        <div className="h-[480px] ml-[200px]">
          <div className="w-full h-[40px] flex justify-between items-center">
            <h1 className="font-bold">Books</h1>
            <h1 className="font-bold">Total </h1>
          </div>
          <hr className="w-full h-[10px] border-[black]"></hr>

          <div className="mt-[15px] w-full h-[200px] overflow-scroll">
            <div className="w-[400px] h-[80px]">
              <div className="w-full h-[30px] flex justify-between">
                <h1 className="text-[20px] font-bold">Dumb books</h1>
                <h1 className="text-[20px] font-bold">100.00 ฿</h1>
              </div>
              <p className="text-[15px] opacity-25">Categories</p>
              <p className="text-[15px] opacity-25">By Vendor's name</p>
            </div>
            <div className="w-[400px] h-[80px]">
              <div className="w-full h-[30px] flex justify-between">
                <h1 className="text-[20px] font-bold">Dumb books</h1>
                <h1 className="text-[20px] font-bold">100.00 ฿</h1>
              </div>
              <p className="text-[15px] opacity-25">Categories</p>
              <p className="text-[15px] opacity-25">By Vendor's name</p>
            </div>
            <div className="w-[400px] h-[80px]">
              <div className="w-full h-[30px] flex justify-between">
                <h1 className="text-[20px] font-bold">Dumb books</h1>
                <h1 className="text-[20px] font-bold">100.00 ฿</h1>
              </div>
              <p className="text-[15px] opacity-25">Categories</p>
              <p className="text-[15px] opacity-25">By Vendor's name</p>
            </div>
            <div className="w-[400px] h-[80px]">
              <div className="w-full h-[30px] flex justify-between">
                <h1 className="text-[20px] font-bold">Dumb books</h1>
                <h1 className="text-[20px] font-bold">100.00 ฿</h1>
              </div>
              <p className="text-[15px] opacity-25">Categories</p>
              <p className="text-[15px] opacity-25">By Vendor's name</p>
            </div>
          </div>
          <hr className="w-full h-[10px] border-[black] mt-[20px]"></hr>

          <div className="w-full h-[40px] flex justify-between items-center">
            <h1 className="font-bold">Subtotal</h1>
            <h1 className="font-bold">100 ฿</h1>
          </div>
          <div className="w-full h-[40px] flex justify-between items-center">
            <h1 className="font-bold">Shipping</h1>
            <h1 className="font-bold">50 ฿</h1>
          </div>
          <div className="w-full h-[40px] flex justify-between items-center">
            <h1 className="font-bold">Total</h1>
            <h1 className="font-bold">150 ฿</h1>
          </div>

          <div className="w-full h-[40px] flex justify-end mt-[10px]">
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditPay;
