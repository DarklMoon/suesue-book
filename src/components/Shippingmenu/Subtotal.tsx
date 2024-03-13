"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Cart } from "@/type";

interface ShipCartProps {
  data: Cart[];
}

function CartItem({ book }: { book: Cart }) {


  return (
    <div className="flex flex-row pb-4">
      <div className="image-container-4">
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
        <p className="text-base text-[#A8A8A8] font-normal">{book.category_name}</p>
        <p className="text-base text-[#A8A8A8] font-normal">By {book.book_author}</p>
      </div>
    </div>
  );
}

export default function Subtotal({ data }: ShipCartProps) {
  const nextBtnHandler = () => {
    window.location.href = `/cashpay`;
  };


  return (
    <div className="flex">
      <div className="inline-block">
        <div className="">
          <div className="border-b-[1px] border-black ml-4 pb-4 right-0">
            {data.map((book, index) => (
              <CartItem key={index} book={book} />
            ))}
          </div>
          <div className="ml-8 mt-6">
            <div className="flex flex-row justify-between">
              <p className="">Subtotal</p>
              <p className="text-xl font-semibold">{data[0].total_price} ฿</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>Shipping</p>
              <p>Calculate at next step</p>
            </div>
            <div className="flex justify-end mt-6">
              <Button
                onClick={nextBtnHandler}
                className="rounded-md bg-[#F9BC60] text-[#FFFFFF] px-10 py-2"
              >
                Next &#8594;
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


