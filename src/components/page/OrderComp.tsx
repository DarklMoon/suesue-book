import React from "react";
import Link from "next/link"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

import { Pencil, Trash2, FolderPlus } from "lucide-react";

type Props = {};

const Order = (props: Props) => {
  return (
    <>
    <div className="h-screen mt-5 p-10 mt-3 ml-[70px] mr-[50px] border border-2 grid">
      <div className="flex mt-[30px] justify-self-center justify-center pb-[10px] inline w-[150px]">
        <p className="text-2xl font-bold">Your Cart</p>        
      </div>
      <div className="border-t border-black w-[70px] justify-self-center block"></div>
      <div className="border-b-2 border-[#B7B7B7] h-8 block flex flex-row mt-8 justify-between">
          <p className="inline-block w-3/6 font-bold mr-2">Book</p>
          <p className="inline-block w-1/7 font-bold flex justify-center ">Price</p>
          <p className="inline-block w-1/7 font-bold flex justify-center">Quantity</p>
          <p className="inline-block w-1/7 font-bold flex justify-center">Total</p>
          <p className="inline-block w-[20px] text-right"></p>
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
          <p className="inline-block w-1/7 flex justify-center self-center ">50.00 ฿</p>
          <p className="inline-block w-1/7 flex justify-center self-center ">2</p>
          <p className="inline-block w-1/7 text-right font-bold self-center ">100.00 ฿</p>
          <Dialog>
            <DialogTrigger>
              <span>
              <Trash2 color="red" className="inline-block w-1/7 text-right self-center font-bold"/>
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
          <p className="inline-block w-1/7 flex justify-center self-center ">50.00 ฿</p>
          <p className="inline-block w-1/7 flex justify-center self-center ">2</p>
          <p className="inline-block w-1/7 text-right font-bold self-center ">100.00 ฿</p>
          <Dialog>
            <DialogTrigger>
              <span>
              <Trash2 color="red" className="inline-block w-1/7 text-right self-center font-bold"/>
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
        {/* error: Checkout button make grid? */}
        <div className="w-[260px] my-8 ml-auto text-right">
            <p className="text-base self-end">Subtotal</p>
            <p className="text-2xl font-bold mb-2">150.00 ฿</p>
            <Link href="/profile">
                <button className="rounded-md bg-[#F9BC60] text-[#FFFFFF] font-bold px-10 py-2">Back To Profile -&gt;</button>
            </Link>
        </div>



    </div>;
    </>
  );
};

export default Order;
