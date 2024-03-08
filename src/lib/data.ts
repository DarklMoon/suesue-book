import { callProducts } from "./db";

type User = {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
  phone: string;
  role: string;
  user_img: string;
};

export async function fetchUser(req: { email: string }): Promise<User[]> {
  console.log("FetchUser:", req);
  try {
    // Use straight quotes or backticks for the SQL query string
    const response = await callProducts("SELECT * FROM USER WHERE email=?", [
      req.email,
    ]);
    // const data = JSON.stringify(response);

    return response as User[];
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function createUser(req: any) {

    console.log("USER_DATA:", req);
  try {
    // Use straight quotes or backticks for the SQL query string
    const response = await callProducts(
      "INSERT INTO USER (first_name, last_name, email, username, password, phone, role, user_img) \
    VALUES(?, ?, ?, ?, ?, ?, ?, ?)",
      [req.first_name, req.last_name, req.email, req.username, req.password, req.phone, req.role, null]
    );
    const data = JSON.stringify(response);
    
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function fetchBooks() {
  try {
    // Use straight quotes or backticks for the SQL query string
    const response = await callProducts("SELECT * FROM BOOK", []);
    const data = JSON.stringify(response);

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function fetchPayment() {
  try {
    // Use straight quotes or backticks for the SQL query string
    const response = await callProducts("SELECT * FROM PAYMENT", []);
    const data = JSON.stringify(response);

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch revenue data.");
  }
}