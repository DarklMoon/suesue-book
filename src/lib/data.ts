import { callProducts } from "./db";

export async function fetchProducts() {
  try {
    // Use straight quotes or backticks for the SQL query string
    const response = await callProducts("SELECT * FROM USER", []);
    const data = JSON.stringify(response);

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch revenue data.");
  }
}
