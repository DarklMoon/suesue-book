import { float } from "aws-sdk/clients/cloudfront";
import { callProducts } from "../dbConfig";
import { getSession } from "@/app/api/auth/func/getEnrolls";

type Cart = {

    book_id:number;
    book_quantity: number;
    customer_id: number;
  };

  export async function createCart(req: { book_id: number, book_quantity:number, customer_id:number }): Promise<Cart[]> {
    console.log("FetchUser:", req);
    const session = await getSession();
    try {

      const customer_id = JSON.stringify(session.user.id)
      // Use straight quotes or backticks for the SQL query string
      const response = await callProducts("INSERT INTO CART (book_id, book_quantity, customer_id) \
      VALUES(?, 1, ?)", [
        req.book_id, customer_id
      ]);
      // const data = JSON.stringify(response);

      return response as Cart[];
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch revenue data.");
    }
  }

export async function showCart(req: { customer_id: number }): Promise<Cart[]> {
    console.log("ok");
    const session = await getSession();
    try {

      const book_seller = JSON.stringify(session.user.id)
      // Use straight quotes or backticks for the SQL query string
      const response = await callProducts("SELECT * FROM CART WHERE customer_id = ?", [
        book_seller
      ]);
      // const data = JSON.stringify(response);

      return response as Cart[];
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch revenue data.");
    }
  }

  export async function deleteCart(req: { customer_id: number }): Promise<Cart[]> {
    console.log("ok")
    const session = await getSession();
    try {

      const book_seller = JSON.stringify(session.user.id)
      // Use straight quotes or backticks for the SQL query string
      const response = await callProducts("SELECT * FROM CART WHERE customer_id = ?", [
        book_seller
      ]);
      // const data = JSON.stringify(response);

      return response as Cart[];
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch revenue data.");
    }
  }
