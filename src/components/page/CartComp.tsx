"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, FolderPlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import Image from "next/image";
import { float } from "aws-sdk/clients/cloudfront";
import { Cart, User } from "@/type";
import { useToast } from "@/components/ui/use-toast";

interface CartProps {
  user: User;
  data: Cart[];
}

function CartItem({ book }: { book: Cart }) {
  console.log("Book-Loop:", book);

  const { toast: showToast } = useToast();
  const [dialogOpen, setDialogOpen] = useState(false);

  const deleteCartHandler = async (cart_id: any) => {
    console.log("DeleteCartHandler:", cart_id);
    const formData = new FormData();
    if (cart_id) {
      formData.append("cart_id", cart_id);
    }

    try {
      const response = await fetch("api/cart", {
        method: "DELETE",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (response) {
        showToast({
          description: "✅ Delete Cart success!",
          variant: "default",
        });
      }
      setDialogOpen(false);
      window.location.reload();
      console.log("DeleteCart:", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border-b-2 border-[#B7B7B7] w-full pt-8 pb-4 flex flex-row justify-between  content-center">
      <div className="w-3/6 font-bold flex flex-row">
        <div className="image-container-3">
          <Image
            src={book.book_image ?? "/Icon-suesue.png"}
            width={200}
            height={400}
            alt="test"
            className="rounded-md"
          />
        </div>
        <div className="ml-6 flex flex-col justify-center">
          <p className="text-2xl font-bold">{book.book_title}</p>
          <p className="text-base text-[#A8A8A8] font-normal">
            {book.category_name}
          </p>
          <p className="text-base text-[#A8A8A8] font-normal">
            By {book.book_author}
          </p>
        </div>
        {/* error: align center text */}
      </div>
      <p className="w-1/7 flex justify-center self-center ">
        {book.book_price} ฿
      </p>
      <p className="w-1/7 flex justify-center self-center ">
        {book.cart_quantity}
      </p>
      <p className="w-1/7 text-right font-bold self-center ">
        {typeof book.book_price === "number" &&
        typeof book.cart_quantity === "number"
          ? `${(book.book_price * book.cart_quantity)?.toFixed(2) || "N/A"} ฿`
          : "N/A"}
      </p>

      <Dialog>
        <DialogTrigger>
          <span>
            <Trash2
              color="red"
              className="inline-block w-1/7 text-right self-center font-bold"
              onClick={() => setDialogOpen(true)}
            />
          </span>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="button" onClick={() => deleteCartHandler(book.cart_id)}>Confirm</Button>
              <Button type="button" onClick={() => setDialogOpen(false)}>Cancel</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default function CartComp({ user, data }: CartProps) {
  
  const checkOutHandler=()=>{
     window.location.href = `/shipping/chooseadd`;
  }
  console.log("CartComp_USER:", user, data);
  return (
    <div className="h-screen mt-8 p-10 ml-[70px] mr-[50px] grid">
      <div className="flex mt-[30px] justify-self-center justify-center pb-[10px] w-[150px]">
        <p className="text-2xl font-bold">Your Cart</p>
      </div>
      <div className="border-t border-black w-[70px] justify-self-center block"></div>
      <div className="border-b-2 border-[#B7B7B7] h-8 flex mt-8 justify-between">
        <p className="inline-block w-3/6 font-bold mr-2">Book</p>
        <p className="w-1/7 font-bold flex justify-center ">Price</p>
        <p className="w-1/7 font-bold flex justify-center">Quantity</p>
        <p className="w-1/7 font-bold flex justify-center">Total</p>
        <p className="inline-block w-[20px] text-right"></p>
      </div>

        <div className="border-b-2 border-[#B7B7B7] w-full pt-8 pb-4 flex flex-row justify-between  content-center">
          <div className="w-full font-bold ">
            {data.map((book, index) => (
              <CartItem key={index} book={book} />
            ))}
          </div>
        </div>
        {/* error: Checkout button make grid? */}
        <div className="w-[260px] justify-self-end grid grid-cols2 my-8">
          <p className="text-base text-right self-end">Subtotal</p>
          <p className="text-2xl font-bold text-right">{data[0].total_price} ฿</p>
          <p className="italic col-span-2 text-right my-2">
            shipping cost calculated at checkout
          </p>
          <Button onClick={checkOutHandler} className="rounded-md bg-[#F9BC60] text-[#FFFFFF] font-bold px-10 py-2 col-span-2">
            Check out -&gt;
          </Button>
        </div>
      </div>
  );
}
