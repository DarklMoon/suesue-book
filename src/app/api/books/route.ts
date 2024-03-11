import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/app/api/auth/func/getEnrolls";


export async function POST(request: NextRequest): Promise<any> {
    const data = request.formData();
    const picture = (await data).get("picture");
    const book_name = (await data).get("book_name");
    const author = (await data).get("author");
    const description = (await data).get("description");
    const price = (await data).get("price");
    const category = (await data).get("category");
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

export async function PUT(request: NextRequest): Promise<any> {
  const data = request.formData();
  const email = (await data).get("email")
  const password = (await data).get("password")

  }

export async function GET(request: NextRequest): Promise<any> {
  try {
    console.log("GET_METHOD")
    return NextResponse.json({
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