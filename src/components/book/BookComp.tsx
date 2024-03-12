"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type Book = {
  book_id?: string;
  book_title?: string;
  book_author?: string;
  book_info?: string;
  book_image?: string;
  book_price?: GLfloat;
  category_name?: string;
  book_quantity?: string;
  book_seller?: string;
};
interface BookCompProps {
  data: Book;
}

export default function BookComp({ data }: BookCompProps) {
  // console.log("BOOK_INSTANCE:", data)
  return (
    <Link href="/addbooks">
      <div className="w-full h-30 flex justify-center flex-col">
        <div className="image-container">
          <Image
            src={data.book_image ?? "/Icon-suesue.png"}
            width={100}
            height={150}
            alt="test"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "0.375rem",
            }}
          />
        </div>
        <h1 className="font-bold text-[15px] line-clamp-1 w-29">
          {data.book_title}
        </h1>
        <h1>{data.book_price} $</h1>
      </div>
    </Link>
  );
}
