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
      SELECT cart_id, mydb.CART.book_id, book_title, book_author, book_image, book_price, category_name, mydb.BOOK.book_quantity, mydb.CART.book_quantity cart_quantity FROM mydb.CART\
      JOIN mydb.BOOK\
      ON mydb.CART.book_id = mydb.BOOK.book_id\
      JOIN mydb.USER\
      ON mydb.CART.customer_id = mydb.USER.user_id\
      join mydb.CATEGORY\
      on mydb.BOOK.book_category = mydb.CATEGORY.category_id\
      WHERE mydb.CART.customer_id = ?;\
      ",
      [req.customer_id]
    );
    // console.log("Response: ", response);
    return response as Cart[];
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function deleteCart(req: {
  customer_id: number;
}): Promise<Cart[]> {
  console.log("ok");
  const session = await getSession();
  try {
    const book_seller = JSON.stringify(session.user.id);
    // Use straight quotes or backticks for the SQL query string
    const response = await callProducts(
      "SELECT * FROM CART WHERE customer_id = ?",
      [book_seller]
    );
    // const data = JSON.stringify(response);

    return response as Cart[];
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch revenue data.");
  }
}
