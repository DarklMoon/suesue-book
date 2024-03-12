import { float } from "aws-sdk/clients/cloudfront";
import { callProducts } from "../dbConfig";
import { getSession } from "@/app/api/auth/func/getEnrolls";

type Book = {
  book_id: string;
  book_title: string;
  book_author: string;
  book_info: string;
  book_image: string;
  book_price: GLfloat;
  category_id: string;
  category_name: string;
  book_quantity: string;
  book_seller: string;
};

export async function fetchAllBook() {
  try {
    // Use straight quotes or backticks for the SQL query string
    const response = await callProducts(
      "\
      SELECT * FROM mydb.BOOK\
      LEFT JOIN mydb.CATEGORY\
      ON mydb.BOOK.book_category = mydb.CATEGORY.category_id;",
      []
    );

    // console.log("Query-DB-AllBook:", response);
    return response as Book[];
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function fetchBookSeller(req: {
  book_seller: number;
}): Promise<Book[]> {
  console.log("FetchUser:", req);
  const session = await getSession();
  try {
    const book_seller = JSON.stringify(session.user.id);
    // Use straight quotes or backticks for the SQL query string
    const response = await callProducts(
      "SELECT * FROM BOOK WHERE book_seller=?",
      [book_seller]
    );
    // const data = JSON.stringify(response);

    return response as Book[];
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function fetchManageBook(req: {
  book_seller: number;
}): Promise<Book[]> {
  console.log("ok");
  const session = await getSession();
  try {
    const book_seller = JSON.stringify(session.user.id);
    // Use straight quotes or backticks for the SQL query string
    const response = await callProducts(
      "SELECT * FROM BOOK WHERE NOT book_seller=?",
      [book_seller]
    );
    // const data = JSON.stringify(response);

    return response as Book[];
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function addBook(req: {
  book_seller: number;
  book_img: string;
  book_name: string;
  book_author: string;
  book_info: string;
  book_price: float;
  book_category: string;
}): Promise<Book[]> {
  console.log("ok");
  const session = await getSession();
  try {
    const book_seller = JSON.stringify(session.user.id);
    // Use straight quotes or backticks for the SQL query string
    const response = await callProducts(
      "INSERT INTO BOOK (book_title, book_author, book_info, book_image, book_price, book_category, book_quantity, book_seller) \
      VALUES(?, ?, ?, ?, ?, ?, 1, ?)",
      [
        req.book_info,
        req.book_author,
        req.book_info,
        req.book_img,
        req.book_price,
        req.book_category,
        book_seller,
      ]
    );
    // const data = JSON.stringify(response);

    return response as Book[];
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function updateBook(req: {
  book_seller: number;
  book_img: string;
  book_name: string;
  book_author: string;
  book_info: string;
  book_price: float;
  book_category: string;
}): Promise<Book[]> {
  console.log("ok");
  const session = await getSession();
  try {
    const book_seller = JSON.stringify(session.user.id);
    // Use straight quotes or backticks for the SQL query string
    const response = await callProducts(
      "UPDATE BOOK SET book_title = ?, book_author = ? , book_info = ? , book_image = ?, book_price = ? , book_category = ?, book_quantity = ? \
      WHERE book_seller = ?",
      [
        req.book_info,
        req.book_author,
        req.book_info,
        req.book_img,
        req.book_price,
        req.book_category,
        book_seller,
      ]
    );
    // const data = JSON.stringify(response);

    return response as Book[];
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function deleteBooks(req: {
  customer_id: number;
}): Promise<Book[]> {
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

    return response as Book[];
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch revenue data.");
  }
}
