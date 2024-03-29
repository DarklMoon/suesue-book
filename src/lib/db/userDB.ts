import { callProducts } from "../dbConfig";
import { User } from "@/type"

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

export async function updateImgUser(req: any) {

    console.log("DB-USER_IMAGE:", req.user_img, "\nDB-USER_ID:", req.user_id);
  try {

    const response = await callProducts(
      "UPDATE USER SET user_img = ? WHERE user_id = ?",
      [req.user_img, req.user_id]
    );
    const data = JSON.stringify(response);

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function updateInfoUser(req: any){
  console.log("DB-USER_INFO:", req)
  try {
    // Use straight quotes or backticks for the SQL query string
    const response = await callProducts(
      "UPDATE USER\
       SET first_name = ?, last_name = ?, email = ?, username = ?, phone = ?, user_img = ?\
       WHERE user_id=?",
      [
        req.first_name,
        req.last_name,
        req.email,
        req.username,
        req.phone,
        req.user_img,
        req.user_id
      ]
    );
    const data = JSON.stringify(response);

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch revenue data.");
  }
}