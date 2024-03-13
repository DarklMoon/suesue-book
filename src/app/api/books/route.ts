import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/app/api/auth/func/getEnrolls";
import { addBook } from "@/lib/db/bookDB";


export async function POST(request: NextRequest): Promise<any> {
    const data = request.formData();
    const book_seller = (await data).get("book_seller");
    const book_author = (await data).get("book_author");
    const book_info = (await data).get("book_info");
    const book_category = (await data).get("book_category");
    const book_price = (await data).get("book_price");
    const book_title = (await data).get("book_title");
    const book_image = (await data).get("book_image");
    try {
      let userData = {
        book_seller: book_seller,
        book_author: book_author,
        book_info: book_info,
        book_category: book_category,
        book_price: book_price,
        book_title: book_title,
        book_image: book_image,
      };
      addBook(userData)

      
    } catch (error) {
      console.log(error);
      throw error;
    }
    return NextResponse.json({

      });
  }

export async function PUT(request: NextRequest): Promise<any> {
  const data = request.formData();
  const email = (await data).get("email")
  const password = (await data).get("password")

  }

export async function GET(request: NextRequest): Promise<any> {
  try {
    console.log("GET_METHOD")
    return NextResponse.json({
      test: "GET_METHOD"
    });

  } catch (error) {
    console.log(error);
    throw error;
  }
  }

export async function DELETE(request: NextRequest): Promise<any> {
    const data = request.formData();
    const picture = (await data).get("picture");
    const book_name = (await data).get("book_name");
    const author = (await data).get("author");
    const description = (await data).get("description");
    try {
      if (picture) {
        console.log("aa")
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
    return NextResponse.json({

      });
  }