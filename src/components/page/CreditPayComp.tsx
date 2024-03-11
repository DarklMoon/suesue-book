"use client"
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import Modal from "@/components/page/ModalComp";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Pencil, Trash2, FolderPlus } from "lucide-react";

type Props = {};

const CreditPay = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
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

    <div className="flex flex-col items-center">
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
      <div className="border-b border-black w-[600px] mt-2"></div>
    </div>
      

      <div className="w-full h-[500px] mt-[30px] flex justify-center items-center">
        <div className="w-[480px] h-[500px] ml-8 mt-6">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="w-[400px] rounded p-4 flex items-start">
                <input id="item1" className="peer/item1 mt-1" type="radio" name="status" value="item1" />
                <label htmlFor="item1" className="ml-2 relative top-[-2px]">
                  <div className="text-black">
                    <p className="font-bold">Credit Name</p>
                    <p>Expire Nov 2026</p>
                  </div>
                </label>
              </div>


              <div className="flex flex-row items-center">
                <span className="mx-4">
                  <Pencil color="black"></Pencil>
                </span>
                <Dialog>
                  <DialogTrigger>
                    <span className="">
                      <Trash2 color="black" />
                    </span>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button type="submit">Confirm</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-[400px] rounded p-4 flex items-start">
                <input id="item2" className="peer/item1 mt-1" type="radio" name="status" value="item1" />
                <label htmlFor="item2" className="ml-2 relative top-[-2px]">
                  <div className="text-black">
                    <p className="font-bold">Credit Name</p>
                    <p>Expire Nov 2026</p>
                  </div>
                </label>
              </div>


              <div className="flex flex-row items-center">
                <span className="mx-4">
                  <Pencil color="black"></Pencil>
                </span>
                <Dialog>
                  <DialogTrigger>
                    <span className="">
                      <Trash2 color="black" />
                    </span>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button type="submit">Confirm</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
          <hr className="mt-6 w-full h-[10px] border-[black] block"></hr>
          <div className="flex justify-end mt-8">
            <Button onClick={() => setShowModal(true)}>Add new Credit Card +</Button>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}/>
          </div>
        </div>
        

        <div className="h-[480px] ml-[200px]">
          <div className="w-full h-[40px] flex justify-between items-center">
            <h1 className="font-bold">Books</h1>
            <h1 className="font-bold">Total </h1>
          </div>
          <hr className="w-full h-[10px] border-[black]"></hr>

          <div className="mt-[15px] w-full h-[200px] overflow-scroll">
            <div className="w-[400px] h-[80px]">
              <div className="w-full h-[30px] flex justify-between">
                <h1 className="text-[20px] font-bold">D++umb books</h1>
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
