import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest): Promise<any> {
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

export async function GET(request: NextRequest): Promise<any> {
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