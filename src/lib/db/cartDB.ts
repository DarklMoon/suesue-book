import { float } from "aws-sdk/clients/cloudfront";
import { callProducts } from "../dbConfig";
import { getSession } from "@/app/api/auth/func/getEnrolls";
import { Cart } from "@/type";

type createCart = {
  book_id: number;
  book_quantity: number;
  customer_id: number;
};

export async function createCart(req: {
  book_id: number;
  book_quantity: number;
  customer_id: number;
}): Promise<createCart[]> {
  console.log("CreatCart-DB:", req);
  try {
    // Use straight quotes or backticks for the SQL query string
    const response = await callProducts(
      "INSERT INTO CART (book_id, book_quantity, customer_id) \
      VALUES(?, ?, ?)",
      [req.book_id, req.book_quantity, req.customer_id]
    );

    return response as createCart[];
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function getCart(req: { customer_id: number }): Promise<Cart[]> {
  console.log("GetCartDB:", req.customer_id);
  try {
    const response = await callProducts(
      "\
        WITH CartDetails AS (\
        SELECT mydb.CART.cart_id,\
        mydb.CART.book_id,\
        mydb.BOOK.book_title,\
        mydb.BOOK.book_author,\
        mydb.BOOK.book_image,\
        mydb.BOOK.book_price,\
        mydb.CATEGORY.category_name,\
        mydb.BOOK.book_quantity AS book_quantity,\
        mydb.CART.book_quantity AS cart_quantity\
        FROM mydb.CART\
        JOIN mydb.BOOK ON mydb.CART.book_id = mydb.BOOK.book_id\
        JOIN mydb.USER ON mydb.CART.customer_id = mydb.USER.user_id\
        JOIN mydb.CATEGORY ON mydb.BOOK.book_category = mydb.CATEGORY.category_id\
        WHERE mydb.CART.customer_id = ? )\
        SELECT *,(SELECT SUM(book_price * cart_quantity) FROM CartDetails) AS total_price FROM CartDetails;",[req.customer_id]
    );
    // console.log("Response: ", response);
    return response as Cart[];
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function deleteCart(req: {
  cart_id: number;
}): Promise<Cart[]> {

  try {
    
    const response = await callProducts(
      "DELETE FROM mydb.CART WHERE cart_id = ?",
      [req.cart_id]
    );
      console.log("DeleteCart-DB:", response)
    return response as Cart[];
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch revenue data.");
  }
}
