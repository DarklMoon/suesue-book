"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { float } from "aws-sdk/clients/cloudfront";
import { Button } from "@/components/ui/button";
import router from "next/router";


type Book = {
  book_id?: string;
  book_title?: string;
  book_author?: string;
  book_info?: string;
  book_image?: string;
  book_price?: float;
  category_name?: string;
  book_quantity?: string;
  book_seller?: string;
  user_id?: string;
};

type BookData = Book | undefined;

const BookDetail = () => {
  const [bookData, setBookData] = useState<BookData>();

  useEffect(() => {
    const fetchData = async () => {
      if (typeof window !== "undefined") {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());

        // Access the 'data' parameter and parse it
        const data = params.data;
        if (data) {
          setBookData(JSON.parse(data));
        //   console.log("Book-Data:", JSON.parse(data));
        }
      }
    };

    fetchData();
  }, []);

  const addToCartHandler = async () => {
    const formData: FormData = new FormData();
    
    if(bookData?.book_id?.toString()){formData.append("bood_id", bookData?.book_id?.toString())}
    if(bookData?.user_id?.toString()){formData.append("bood_id", bookData?.user_id?.toString());}

    try {
      const response = await fetch("api/cart", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (response) {
        const data = await response.json();
        console.log("Add to Cart:", data);
        showToast({
          description: "Add to Cart success!",
          variant: "default",
        });

        router.push("/cart");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("TRANSACTION_ENDING", formData);
    }
  }

  return (
    <div className="h-screen p-10 pt-20">
      <div className="p-20 flex">
        <div className="image-container-2">
            <Image
              src={bookData?.book_image?.toString() ?? "/Icon-suesue.png"}
              width={300}
              height={1000}
              alt="test"
              className="rounded-md"
            />
        </div>
        <div className="pl-[6em] flex flex-col">
          <div className="flex justify-between">
            <div className="text-4xl font-semibold">
              {bookData?.book_title?.toString()}
            </div>
            <div className="text-2xl font-medium">
              ${bookData?.book_price?.toString()}.00
            </div>
          </div>
          <div className="mt-5">
            by{" "}
            <span className="font-semibold">
              {bookData?.book_author?.toString()}
            </span>
          </div>
          <div className="mt-5">
            <div className="bg-[#4F6F52] pt-1.5 pb-1.5 text-center rounded-full w-[7em] text-white">
              {bookData?.category_name?.toString()}
            </div>
          </div>
          <div className="mt-5">{bookData?.book_info?.toString()}</div>
          <div className="mt-[6em] flex justify-end items-end">
            <Button className="bg-[#F9BC60]" onClick={addToCartHandler}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;



function showToast(arg0: { description: string; variant: string; }) {
    throw new Error("Function not implemented.");
}
//   const urlSearchParams = new URLSearchParams(window.location.search);
//   const params = Object.fromEntries(urlSearchParams.entries());
//   let bookData = "";

//   // Access the 'data' parameter and parse it
//   const data = params.data;
//   if (data) {
//     bookData = JSON.parse(data);
//     console.log("Book Data:", bookData);
//   }
