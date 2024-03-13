import { createCart, deleteCart } from "@/lib/db/cartDB";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest): Promise<any> {
    const data = request.formData();
      const customer_id = Number((await data).get("user_id"));
      const book_id = Number((await data).get("book_id"));
      const book_quantity = Number((await data).get("book_quantity"));
    
    try {
      console.log("POST-CART:", customer_id, book_id, book_quantity);
      createCart({book_id, book_quantity, customer_id})
     return NextResponse.json({
       message: "Success CART",
     });
    } catch (error) {
      console.log(error);
      throw error;
    }
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


export async function DELETE(request: NextRequest): Promise<any> {
  const data = request.formData();
  const cart_id = Number((await data).get("cart_id"));
  try {
   deleteCart({cart_id})
    return NextResponse.json({message: "✅ Delete Success!"});
  } catch (error) {
    console.log(error);
    throw error;
  }
}